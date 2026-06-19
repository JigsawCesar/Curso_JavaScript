// ============================================
// SERVICE - Serviço de Chat
// Contém a lógica de negócio: formatar histórico,
// enviar mensagens para a API e processar respostas.
// ============================================

import { GEMINI_API_KEY, BASE_URL } from '../config/gemini.js';
import ConversationRepository from '../repositories/conversation.repository.js';
import criarErro from '../utils/criarErro.js';

const ChatService = {
    // --- Formata o histórico para o formato da API do Gemini ---
    formatarHistorico(history) {
        // .map() percorre cada mensagem e retorna um novo array transformado
        return history.map((msg) => ({
            // Operador ternário: se role for 'assistant', usa 'model'
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));
    },

    // --- Envia mensagem e recebe resposta da IA ---
    async enviarMensagem(message, sessionId) {
        // Busca o histórico da sessão
        const history = ConversationRepository.buscarPorSessao(sessionId);

        // Registra a mensagem do usuário
        ConversationRepository.adicionarMensagem(sessionId, {
            role: 'user',
            content: message
        });

        try {
            const contents = [
                ...this.formatarHistorico(history.slice(0, -1)),
                { role: 'user', parts: [{ text: message }] }
            ];

            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': GEMINI_API_KEY
                },
                body: JSON.stringify({
                    contents,
                    generationConfig: {
                        maxOutputTokens: 65536,
                        temperature: 0.7
                    }
                })
            });

            const data = await response.json();

            console.log('Resposta bruta da API:', JSON.stringify(data).substring(0, 500));

            if (data.error) {
                console.error('Erro completo da API:', JSON.stringify(data.error));
                const errorStr = typeof data.error === 'string' ? data.error : (data.error.message || JSON.stringify(data.error));
                const msg = errorStr.toLowerCase();
                const status = (typeof data.error === 'object' ? data.error.code : null) || response.status;
                if (status === 429 || msg.includes('quota') || msg.includes('rate') || msg.includes('resource_exhausted') || msg.includes('exceeded')) {
                    const retryMatch = errorStr.match(/retry in (\d+\.?\d*)s/i);
                    const retrySeconds = retryMatch ? Math.ceil(parseFloat(retryMatch[1])) : 30;
                    const error = criarErro('Limite de requisições atingido.', 429);
                    error.retryAfter = retrySeconds;
                    throw error;
                }
                if (status === 403 || msg.includes('leaked') || msg.includes('permission') || msg.includes('api key')) {
                    throw criarErro('Chave de API inválida ou bloqueada. Gere uma nova em https://aistudio.google.com/apikey', 403);
                }
                throw criarErro('Erro ao processar sua mensagem.', 500);
            }

            const candidate = data.candidates[0];
            console.log('finishReason:', candidate.finishReason);

            if (candidate.finishReason === 'MAX_TOKENS') {
                console.warn('ATENÇÃO: Resposta truncada pelo limite de tokens!');
            }

            const reply = candidate.content.parts[0].text;
            console.log('Tamanho da resposta:', reply.length, 'caracteres');

            ConversationRepository.adicionarMensagem(sessionId, {
                role: 'assistant',
                content: reply
            });

            return reply;
        } catch (error) {
            if (error.status) throw error;
            console.error('Erro na API:', error.message);
            throw criarErro('Erro ao conectar com a API do Gemini.', 500);
        }
    },

    // --- Limpa a conversa de uma sessão ---
    limparConversa(sessionId) {
        ConversationRepository.limparSessao(sessionId);
    }
};

export default ChatService;

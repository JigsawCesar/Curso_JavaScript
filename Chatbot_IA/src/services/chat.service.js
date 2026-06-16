// ============================================
// SERVICE - Serviço de Chat
// Contém a lógica de negócio: formatar histórico,
// enviar mensagens para a API e processar respostas.
// ============================================

import model from '../config/gemini.js';
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
            // Cria uma sessão de chat com o modelo
            // .slice(0, -1) retorna todas as mensagens exceto a última (a atual)
            const chat = model.startChat({
                history: this.formatarHistorico(history.slice(0, -1)),
                generationConfig: {
                    maxOutputTokens: 1000,
                    temperature: 0.7
                }
            });

            // Envia a mensagem e aguarda a resposta
            const result = await chat.sendMessage(message);
            const reply = result.response.text();

            // Registra a resposta da IA
            ConversationRepository.adicionarMensagem(sessionId, {
                role: 'assistant',
                content: reply
            });

            return reply;
        } catch (error) {
            console.error('Erro na API:', error.message);
            throw criarErro('Erro ao processar sua mensagem. Verifique sua chave API.', 500);
        }
    },

    // --- Limpa a conversa de uma sessão ---
    limparConversa(sessionId) {
        ConversationRepository.limparSessao(sessionId);
    }
};

export default ChatService;

// ============================================
// CONTROLLER - Controlador do Chat
// Recebe as requisições HTTP, chama o service
// e envia a resposta para o cliente.
// ============================================

import ChatService from '../services/chat.service.js';

const ChatController = {
    // --- Rota POST /api/chat ---
    // Recebe mensagem do usuário e retorna resposta da IA
    async enviarMensagem(req, res, next) {
        try {
            // Destructuring: extrai message e sessionId do corpo da requisição
            const { message, sessionId } = req.body;

            // Validação básica
            if (!message || !sessionId) {
                return res.status(400).json({
                    error: 'Campos "message" e "sessionId" são obrigatórios.'
                });
            }

            // Chama o service para processar a mensagem
            const reply = await ChatService.enviarMensagem(message, sessionId);

            // Retorna a resposta em JSON
            return res.status(200).json({ reply });
        } catch (error) {
            // Encaminha o erro para o middleware central
            return next(error);
        }
    },

    // --- Rota POST /api/clear ---
    // Limpa o histórico de uma sessão
    async limparConversa(req, res, next) {
        try {
            const { sessionId } = req.body;

            if (!sessionId) {
                return res.status(400).json({
                    error: 'Campo "sessionId" é obrigatório.'
                });
            }

            ChatService.limparConversa(sessionId);

            return res.status(200).json({ success: true });
        } catch (error) {
            return next(error);
        }
    }
};

export default ChatController;

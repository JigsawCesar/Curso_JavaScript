// ============================================
// ROUTES - Rotas da API de Chat
// Define os endpoints e conecta ao controller.
// ============================================

import { Router } from 'express';
import ChatController from '../controllers/chat.controller.js';

// Cria o roteador
const router = Router();

// POST /api/chat
// Recebe mensagem do usuário e retorna resposta da IA
router.post('/chat', ChatController.enviarMensagem);

// POST /api/clear
// Limpa o histórico de uma sessão
router.post('/clear', ChatController.limparConversa);

export default router;

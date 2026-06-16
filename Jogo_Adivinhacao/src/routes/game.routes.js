// ============================================
// GAME.ROUTES.JS - Rotas do Jogo da Adivinhação
// Define os endpoints da API do jogo.
// ============================================

// Router permite criar um conjunto de rotas separado
import { Router } from "express";

// Controller com as funções do jogo
import GameController from "../controllers/game.controller.js";

// Criamos o roteador do jogo
const router = Router();

// GET /api/game/novo
// Gera um novo número secreto e retorna o estado inicial
router.get("/novo", GameController.criarJogo);

// POST /api/game/chutar
// Recebe um palpite e retorna o resultado
router.post("/chutar", GameController.chutar);

// GET /api/game/recorde
// Retorna o recorde do jogador
router.get("/recorde", GameController.obterRecorde);

// Exportamos o roteador para ser usado no app.js
export default router;

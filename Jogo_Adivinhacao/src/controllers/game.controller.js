// ============================================
// GAME.CONTROLLER.JS - Controlador do Jogo
// Conecta o Service (regras) com as rotas (HTTP).
// Recebe req/res e devolve a resposta.
// ============================================

// Service com as regras de negócio do jogo
import GameService from "../services/game.service.js";

// --- Cria um novo jogo ---
const criarJogo = (req, res) => {
    try {
        // O service cria o estado inicial do jogo
        const estado = GameService.criarJogo();

        // Retorna o estado em JSON com status 200 (sucesso)
        return res.status(200).json(estado);
    } catch (error) {
        // Se der erro, retorna status 500 (erro interno)
        return res.status(500).json({ message: "Erro ao criar jogo." });
    }
};

// --- Processa um palpite ---
const chutar = (req, res) => {
    try {
        // Destructuring: extrai palpite e sessionId do corpo da requisição
        const { palpite, sessionId } = req.body;

        // Validação: palpite é obrigatório
        if (palpite === undefined) {
            return res.status(400).json({ message: "O campo 'palpite' é obrigatório." });
        }

        // Validação: sessionId é obrigatório
        if (!sessionId) {
            return res.status(400).json({ message: "O campo 'sessionId' é obrigatório." });
        }

        // Converte palpite para número inteiro
        const palpiteNumero = parseInt(palpite);

        // O service verifica o palpite e retorna o resultado
        const resultado = GameService.chutar(palpiteNumero, sessionId);

        // Retorna o resultado em JSON
        return res.status(200).json(resultado);
    } catch (error) {
        // Se der erro, retorna a mensagem do erro
        return res.status(500).json({ message: error.message || "Erro ao processar palpite." });
    }
};

// --- Retorna o recorde do jogador ---
const obterRecorde = (req, res) => {
    try {
        // Extrai sessionId da query string (?sessionId=xxx)
        const { sessionId } = req.query;

        if (!sessionId) {
            return res.status(400).json({ message: "O parâmetro 'sessionId' é obrigatório." });
        }

        const recorde = GameService.obterRecorde(sessionId);
        return res.status(200).json(recorde);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao obter recorde." });
    }
};

// Exportamos as funções para serem usadas nas rotas
const GameController = {
    criarJogo,
    chutar,
    obterRecorde,
};

export default GameController;

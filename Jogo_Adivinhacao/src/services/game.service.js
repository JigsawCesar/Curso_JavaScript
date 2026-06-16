// ============================================
// GAME.SERVICE.JS - Serviço do Jogo
// Contém as regras de negócio e a lógica do jogo.
// Não sabe nada sobre HTTP ou DOM.
// ============================================

// Model com o estado do jogo
import GameModel from "../models/game.model.js";

// Utility para gerar números aleatórios
import gerarNumeroAleatorio from "../utils/gerarNumero.js";

// --- Cria um novo jogo ---
const criarJogo = () => {
    // Gera um novo número secreto
    const numeroSecreto = gerarNumeroAleatorio(1, 100);

    // Retorna o estado inicial (sem revelar o número!)
    return {
        mensagem: "Pensei em um número de 1 a 100. Consegue adivinhar?",
        numeroSecreto, // número gerado (para o client usar internamente)
    };
};

// --- Processa um palpite ---
const chutar = (palpite, sessionId) => {
    // Validação: verifica se é um número entre 1 e 100
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        return {
            tipo: "erro",
            mensagem: "Digite um número válido entre 1 e 100!",
        };
    }

    // Busca ou cria o estado do jogo para essa sessão
    let estado = GameModel.buscarPorSessionId(sessionId);

    if (!estado) {
        // Cria novo jogo se não existir
        estado = GameModel.criar(sessionId, gerarNumeroAleatorio(1, 100));
    }

    // Incrementa tentativas
    estado.tentativas++;

    // Registra o palpite no histórico
    estado.palpites.push(palpite);

    // Verifica se acertou
    if (palpite === estado.numeroSecreto) {
        // Verifica se houve novo recorde
        const novoRecorde = GameModel.verificarRecorde(sessionId, estado.tentativas);

        return {
            tipo: "acerto",
            mensagem: `Parabéns! Você acertou em ${estado.tentativas} tentativa(s)!`,
            tentativas: estado.tentativas,
            novoRecorde,
        };
    }

    // Verifica se foi menor ou maior
    if (palpite < estado.numeroSecreto) {
        return { tipo: "baixo", mensagem: "Muito baixo! Tente um número maior." };
    }

    return { tipo: "alto", mensagem: "Muito alto! Tente um número menor." };
};

// --- Retorna o recorde do jogador ---
const obterRecorde = (sessionId) => {
    const recorde = GameModel.obterRecorde(sessionId);
    return {
        recorde: recorde || null,
        mensagem: recorde ? `Seu recorde é ${recorde} tentativa(s).` : "Ainda não há recorde.",
    };
};

// Exportamos as funções que o controller pode chamar
const GameService = {
    criarJogo,
    chutar,
    obterRecorde,
};

export default GameService;

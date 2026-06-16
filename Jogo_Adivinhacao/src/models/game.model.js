// ============================================
// GAME.MODEL.JS - Modelo do Jogo
// Responsável pelo estado do jogo e persistência.
// Não sabe nada sobre HTTP, rotas ou DOM.
// ============================================

// --- Armazenamento em memória (simula um banco de dados) ---
// Em um projeto real, usaríamos MongoDB ou outro banco
const jogos = new Map();

// --- Estrutura de um jogo ---
// {
//   sessionId: string,
//   numeroSecreto: number,
//   tentativas: number,
//   palpites: number[],
//   recorde: number | null
// }

// --- Busca o estado do jogo por sessionId ---
const buscarPorSessionId = (sessionId) => {
    // .has() verifica se a chave existe no Map
    // .get() retorna o valor associado à chave
    return jogos.get(sessionId) || null;
};

// --- Cria um novo jogo ---
const criar = (sessionId, numeroSecreto) => {
    const estado = {
        sessionId,
        numeroSecreto,
        tentativas: 0,
        palpites: [],
        recorde: null,
    };

    // .set() armazena o valor no Map
    jogos.set(sessionId, estado);
    return estado;
};

// --- Verifica e atualiza o recorde ---
// Retorna true se houve novo recorde
const verificarRecorde = (sessionId, tentativas) => {
    const estado = jogos.get(sessionId);

    if (!estado) return false;

    // Se não existe recorde ou a tentativa atual é menor
    if (!estado.recorde || tentativas < estado.recorde) {
        estado.recorde = tentativas;
        return true;
    }

    return false;
};

// --- Retorna o recorde do jogador ---
const obterRecorde = (sessionId) => {
    const estado = jogos.get(sessionId);
    return estado ? estado.recorde : null;
};

// Exportamos as funções do repository
const GameModel = {
    buscarPorSessionId,
    criar,
    verificarRecorde,
    obterRecorde,
};

export default GameModel;

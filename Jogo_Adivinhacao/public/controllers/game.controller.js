// ============================================
// GAME.CONTROLLER.JS - Controlador do Jogo (client-side)
// Conecta o Model (regras) com a View (tela).
// Escuta eventos do usuário e coordena as ações.
// ============================================

import GameModel from '../models/game.model.js';
import GameView from '../views/game.view.js';

// --- Função que processa o chute do jogador ---
const verificarPalpite = () => {
    const palpite = parseInt(GameView.inputPalpite.value);

    // Pede ao Model para verificar o palpite
    const resultado = GameModel.verificarPalpite(palpite);

    // Se deu erro de validação, mostra na tela e para
    if (resultado.tipo === 'erro') {
        GameView.mostrarResultado(resultado);
        return;
    }

    // Atualiza o contador de tentativas na tela
    GameView.atualizarTentativas(GameModel.tentativas);

    // Adiciona o palpite na lista visual
    GameView.adicionarPalpite(palpite, resultado.tipo);

    // Se acertou, finaliza o jogo
    if (resultado.tipo === 'acerto') {
        resultado.mensagem += ' 🎉';
        GameView.mostrarResultado(resultado);
        GameView.finalizar();

        const novoRecorde = GameModel.verificarRecorde();
        if (novoRecorde) {
            GameView.spanRecorde.textContent = GameModel.recorde;
            GameView.resultado.textContent += '\nNovo recorde! 🏆';
        }
    } else {
        resultado.mensagem += resultado.tipo === 'baixo' ? ' ⬆️' : ' ⬇️';
        GameView.mostrarResultado(resultado);
    }

    GameView.limparInput();
};

// --- Função que reinicia o jogo ---
const reiniciarJogo = () => {
    GameModel.iniciar();
    GameView.reiniciar();
};

// --- Inicialização do jogo ---
const iniciar = () => {
    GameModel.iniciar();
    GameView.mostrarRecorde(GameModel.recorde);

    // Event Listeners
    GameView.botaoChutar.addEventListener('click', verificarPalpite);
    GameView.botaoReiniciar.addEventListener('click', reiniciarJogo);

    // Permite apertar Enter para enviar o palpite
    GameView.inputPalpite.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (GameView.botaoChutar.style.display !== 'none') {
                verificarPalpite();
            } else {
                reiniciarJogo();
            }
        }
    });

    GameView.inputPalpite.focus();
};

const GameController = { iniciar };

export default GameController;

// ============================================
// GAME.VIEW.JS - Visão do Jogo (client-side)
// Responsável por manipular o HTML (DOM).
// Não sabe nada sobre regras do jogo.
// ============================================

// --- Selecionando elementos do HTML uma única vez ---
const GameView = {
    inputPalpite: document.getElementById('palpite'),
    botaoChutar: document.getElementById('chutar'),
    botaoReiniciar: document.getElementById('reiniciar'),
    resultado: document.getElementById('resultado'),
    spanTentativas: document.getElementById('tentativas'),
    spanRecorde: document.getElementById('recorde'),
    listaPalpites: document.getElementById('listaPalpites'),

    // --- Exibe o recorde salvo ---
    mostrarRecorde(recorde) {
        if (recorde) {
            this.spanRecorde.textContent = recorde;
        }
    },

    // --- Exibe o resultado do palpite ---
    mostrarResultado(resultado) {
        this.resultado.textContent = resultado.mensagem;
        this.resultado.className = `resultado ${resultado.tipo}`;
    },

    // --- Atualiza o contador de tentativas ---
    atualizarTentativas(tentativas) {
        this.spanTentativas.textContent = tentativas;
    },

    // --- Adiciona um palpite visual na lista ---
    adicionarPalpite(palpite, tipo) {
        const tag = document.createElement('span');
        tag.className = `palpite-tag ${tipo}`;
        tag.textContent = palpite;
        this.listaPalpites.appendChild(tag);
    },

    // --- Finaliza o jogo visualmente ---
    finalizar() {
        this.inputPalpite.disabled = true;
        this.botaoChutar.style.display = 'none';
        this.botaoReiniciar.style.display = 'inline-block';
    },

    // --- Reseta a interface para um novo jogo ---
    reiniciar() {
        this.spanTentativas.textContent = '0';
        this.resultado.textContent = '';
        this.resultado.className = 'resultado';
        this.listaPalpites.innerHTML = '';
        this.inputPalpite.disabled = false;
        this.inputPalpite.value = '';
        this.inputPalpite.focus();
        this.botaoChutar.style.display = 'inline-block';
        this.botaoReiniciar.style.display = 'none';
    },

    // --- Limpa o campo de input ---
    limparInput() {
        this.inputPalpite.value = '';
        this.inputPalpite.focus();
    }
};

export default GameView;

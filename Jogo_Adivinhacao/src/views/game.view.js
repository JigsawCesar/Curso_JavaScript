// ============================================
// VIEW - Visão do Jogo
// Responsável por manipular o HTML (DOM).
// Não sabe nada sobre regras do jogo.
// ============================================

// --- Selecionando elementos do HTML uma única vez ---
// Document.getElementById retorna um elemento pelo seu id
const GameView = {
    // Elementos do DOM encapsulados no objeto
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

        // Define a classe CSS baseada no tipo do resultado
        this.resultado.className = `resultado ${resultado.tipo}`;
    },

    // --- Atualiza o contador de tentativas ---
    atualizarTentativas(tentativas) {
        this.spanTentativas.textContent = tentativas;
    },

    // --- Adiciona um palpite visual na lista ---
    adicionarPalpite(palpite, tipo) {
        // Cria um novo elemento <span> no HTML
        const tag = document.createElement('span');

        // Define as classes CSS para estilizar (baixo = azul, alto = vermelho, acerto = verde)
        tag.className = `palpite-tag ${tipo}`;

        // Define o texto do elemento
        tag.textContent = palpite;

        // Adiciona o elemento como filho da lista de palpites
        this.listaPalpites.appendChild(tag);
    },

    // --- Finaliza o jogo visualmente ---
    finalizar() {
        // Desabilita o input para não aceitar mais palpites
        this.inputPalpite.disabled = true;

        // Esconde o botão Chutar e mostra o Jogar Novamente
        this.botaoChutar.style.display = 'none';
        this.botaoReiniciar.style.display = 'inline-block';
    },

    // --- Reseta a interface para um novo jogo ---
    reiniciar() {
        this.spanTentativas.textContent = '0';
        this.resultado.textContent = '';
        this.resultado.className = 'resultado';

        // innerHTML = '' remove todo o conteúdo do elemento
        this.listaPalpites.innerHTML = '';

        // Reabilita o input
        this.inputPalpite.disabled = false;
        this.inputPalpite.value = '';
        this.inputPalpite.focus();

        // Mostra o botão Chutar e esconde o Jogar Novamente
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

// ============================================
// GAME.MODEL.JS - Modelo do Jogo (client-side)
// Responsável pelo estado do jogo e regras.
// Não sabe nada sobre HTML ou DOM.
// ============================================

// --- Estado do jogo encapsulado em um objeto ---
const GameModel = {
    // Número secreto que o jogador precisa adivinhar
    numeroSecreto: 0,

    // Contador de tentativas realizadas
    tentativas: 0,

    // Array que armazena todos os palpites feitos
    palpites: [],

    // Recorde salvo no navegador (menor número de tentativas)
    recorde: null,

    // --- Gera um número aleatório entre 1 e 100 ---
    gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    },

    // --- Inicializa um novo jogo ---
    iniciar() {
        this.numeroSecreto = this.gerarNumero();
        this.tentativas = 0;
        this.palpites = [];
    },

    // --- Verifica o palpite e retorna o resultado ---
    verificarPalpite(palpite) {
        // Validação: verifica se é um número entre 1 e 100
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            return { tipo: 'erro', mensagem: 'Digite um número válido entre 1 e 100!' };
        }

        if (this.palpites.includes(palpite)) {
            return { tipo: 'erro', mensagem: 'Esse número já foi digitado!\nTente outro.' };
        }

        // Incrementa o contador de tentativas
        this.tentativas++;

        // Registra o palpite no histórico
        this.palpites.push(palpite);

        // Verifica se acertou
        if (palpite === this.numeroSecreto) {
            return {
                tipo: 'acerto',
                mensagem: `🎉Parabéns!🎉\nVocê acertou em ${this.tentativas} tentativa${this.tentativas === 1 ? '' : 's'}!`,
                tentativas: this.tentativas
            };
        }

        // Verifica se foi menor ou maior
        if (palpite < this.numeroSecreto) {
            return { tipo: 'baixo', mensagem: 'Muito baixo!\nTente um número maior' };
        }

        return { tipo: 'alto', mensagem: 'Muito alto!\nTente um número menor' };
    },

    // --- Verifica e atualiza o recorde ---
    verificarRecorde() {
        const recordeSalvo = localStorage.getItem('recorde');
        this.recorde = recordeSalvo ? parseInt(recordeSalvo) : null;

        if (!this.recorde || this.tentativas < this.recorde) {
            this.recorde = this.tentativas;
            localStorage.setItem('recorde', this.recorde);
            return true;
        }

        return false;
    }
};

export default GameModel;

// ============================================
// REPOSITORY - Repositório de Conversas
// Responsável por armazenar e recuperar dados.
// Aqui usamos um Map em memória (não banco de dados).
// ============================================

// Map é uma estrutura de dados chave-valor
// Mais flexível que objeto: aceita qualquer tipo como chave
const conversations = new Map();

const ConversationRepository = {
    // --- Busca o histórico de uma sessão ---
    buscarPorSessao(sessionId) {
        // .has() verifica se a chave existe no Map
        if (!conversations.has(sessionId)) {
            // Se não existe, cria um array vazio
            conversations.set(sessionId, []);
        }
        // .get() retorna o valor associado à chave
        return conversations.get(sessionId);
    },

    // --- Adiciona uma mensagem ao histórico ---
    adicionarMensagem(sessionId, mensagem) {
        const history = this.buscarPorSessao(sessionId);
        // .push() adiciona um elemento ao final do array
        history.push(mensagem);

        // Limita o histórico a 20 mensagens para não sobrecarregar a API
        if (history.length > 20) {
            // .splice() remove elementos do array (modifica o original)
            history.splice(0, history.length - 20);
        }
    },

    // --- Limpa o histórico de uma sessão ---
    limparSessao(sessionId) {
        // .delete() remove a chave e seu valor do Map
        conversations.delete(sessionId);
    }
};

export default ConversationRepository;

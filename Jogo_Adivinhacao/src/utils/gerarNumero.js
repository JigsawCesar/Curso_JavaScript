// ============================================
// UTILS - Funções utilitárias
// Funções auxiliares que podem ser reutilizadas.
// ============================================

// --- Gera um número aleatório entre min e max (inclusos) ---
const gerarNumeroAleatorio = (min, max) => {
    // Math.random() gera decimal entre 0 (incluso) e 1 (excluso)
    // Math.floor() arredonda para baixo
    // Multiplicamos pela faixa e somamos o mínimo
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// --- Cria um erro com mensagem e status HTTP ---
const criarErro = (mensagem, status = 500) => {
    const erro = new Error(mensagem);
    erro.status = status;
    return erro;
};

// Exportamos as funções utilitárias
export { gerarNumeroAleatorio, criarErro };
export default gerarNumeroAleatorio;

// ============================================
// UTILS - Funções auxiliares
// Funções pequenas e reutilizáveis.
// ============================================

// Função para criar erros padronizados (mensagem + status HTTP)
// Isso evita repetir: const error = new Error(...); error.status = ...
function criarErro(message, status = 500) {
    // Cria um erro padrão do JavaScript com a mensagem recebida
    const error = new Error(message);

    // Adiciona o status HTTP para o middleware de erro saber qual resposta enviar
    error.status = status;

    // Devolve o pronto para ser usado com "throw" ou "next(error)"
    return error;
}

export default criarErro;

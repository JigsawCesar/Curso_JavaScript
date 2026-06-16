// ============================================
// MIDDLEWARE - Tratamento centralizado de erros
// Fica no final do app.js e recebe todos os erros
// enviados por next(error).
// ============================================

function erroMiddleware(error, req, res, next) {
    // Se o erro veio do criarErro, ele terá status
    // Se não tiver, assumimos erro interno do servidor
    const status = error.status || 500;

    // Se não houver mensagem específica, usamos uma mensagem padrão
    const message = error.message || 'Erro interno do servidor.';

    // Erros 500 são problemas do servidor, então registramos no terminal
    if (status >= 500) {
        console.error(error);
    }

    // Enviamos a resposta de erro para o cliente
    return res.status(status).json({ error: message });
}

export default erroMiddleware;

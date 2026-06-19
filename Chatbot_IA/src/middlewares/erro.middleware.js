// ============================================
// MIDDLEWARE - Tratamento centralizado de erros
// Fica no final do app.js e recebe todos os erros
// enviados por next(error).
// ============================================

function erroMiddleware(error, req, res, next) {
    const status = error.status || 500;
    const message = error.message || 'Erro interno do servidor.';

    if (status >= 500) {
        console.error(error);
    }

    const response = { error: message };
    if (error.retryAfter) response.retryAfter = error.retryAfter;

    return res.status(status).json(response);
}

export default erroMiddleware;

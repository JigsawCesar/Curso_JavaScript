// ============================================
// APP.JS - Configuração da aplicação Express
// Cria o app, registra middlewares, rotas e
// exporta para o server.js iniciar o servidor.
// ============================================

import express from "express";

// Importando as rotas da API
import chatRoutes from "./routes/chat.routes.js";

// Middleware central de erro
import erroMiddleware from "./middlewares/erro.middleware.js";

// Helper para criar erros padronizados
import criarErro from "./utils/criarErro.js";

// Criando a aplicação Express
const app = express();

// --- Middlewares ---
// express.json() faz o parsing de JSON no corpo das requisições
app.use(express.json());

// express.static() serve arquivos estáticos (HTML, CSS, JS do cliente)
app.use(express.static('public'));

// --- Rotas ---
// Rota inicial apenas para testar se a API está rodando
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Chatbot IA está rodando." });
});

// Todas as rotas de chat começam com /api
app.use("/api", chatRoutes);

// --- Tratamento de rotas não encontradas ---
// Se nenhuma rota acima responder, esta função será executada
app.use((req, res, next) => {
    return next(criarErro("Rota não encontrada.", 404));
});

// --- Middleware de erro ---
// Precisa ficar por último para capturar erros de todas as rotas
app.use(erroMiddleware);

export default app;

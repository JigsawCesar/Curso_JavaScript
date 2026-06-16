// ============================================
// APP.JS - Configuração do Express
// Cria a aplicação e configura middlewares e rotas.
// ============================================

// Importamos o Express
import express from "express";

// Importamos as rotas do jogo
import gameRoutes from "./routes/game.routes.js";

// Criamos a aplicação Express
const app = express();

// Middleware nativo do Express para ler JSON no corpo das requisições
app.use(express.json());

// Serve arquivos estáticos (HTML, CSS, JS) da pasta public
app.use(express.static("public"));

// Todas as rotas do jogo começam com /api/game
app.use("/api/game", gameRoutes);

// Rota inicial apenas para testar se a API está rodando
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Jogo da Adivinhação API está rodando." });
});

// Exportamos app para o server.js iniciar o servidor
export default app;

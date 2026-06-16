// ============================================
// SERVER.JS - Ponto de entrada do servidor
// Carrega variáveis de ambiente, conecta ao banco
// (se houver) e inicia o servidor HTTP.
// ============================================

// dotenv carrega as variáveis do arquivo .env para process.env
import dotenv from "dotenv";

// app contém toda a configuração do Express
import app from "./app.js";

// Carrega o arquivo .env
dotenv.config();

// No Render, a porta vem de process.env.PORT
// No computador local, se não houver PORT, usamos 3000
const PORT = process.env.PORT || 3000;

// Inicia o servidor HTTP
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

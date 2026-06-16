// ============================================
// CONFIG - Configuração da API do Gemini
// Centraliza a inicialização do modelo de IA.
// ============================================

import { GoogleGenerativeAI } from '@google/generative-ai';

// Cria a instância da API do Google Generative AI
// A chave vem do arquivo .env (process.env.GEMINI_API_KEY)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Seleciona o modelo que será usado
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

export default model;

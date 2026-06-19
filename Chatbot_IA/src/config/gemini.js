// ============================================
// CONFIG - Configuração da API do Gemini
// Centraliza a URL e modelo usados para chamadas à API.
// ============================================

import 'dotenv/config';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-2.5-flash';
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export { GEMINI_API_KEY, BASE_URL };

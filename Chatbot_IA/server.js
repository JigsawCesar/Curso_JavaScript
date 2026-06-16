require('dotenv').config();
const { ProxyAgent, setGlobalDispatcher } = require('undici');

if (process.env.https_proxy) {
  setGlobalDispatcher(new ProxyAgent(process.env.https_proxy));
}

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

const conversations = new Map();

function formatHistory(history) {
  return history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));
}

app.post('/api/chat', async (req, res) => {
  const { message, sessionId } = req.body;

  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, []);
  }

  const history = conversations.get(sessionId);
  history.push({ role: 'user', content: message });

  if (history.length > 20) {
    history.splice(0, history.length - 20);
  }

  try {
    const chat = model.startChat({
      history: formatHistory(history.slice(0, -1)),
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7
      }
    });

    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    history.push({ role: 'assistant', content: reply });

    res.json({ reply });
  } catch (error) {
    console.error('Erro na API:', error.message);
    res.status(500).json({ error: 'Erro ao processar sua mensagem. Verifique sua chave API.' });
  }
});

app.post('/api/clear', (req, res) => {
  const { sessionId } = req.body;
  conversations.delete(sessionId);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

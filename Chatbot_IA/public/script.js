const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const sendText = document.getElementById('sendText');
const loading = document.getElementById('loading');
const clearBtn = document.getElementById('clearBtn');

const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);

function addMessage(text, isUser) {
  const div = document.createElement('div');
  div.className = `message ${isUser ? 'user' : 'bot'}`;
  div.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function setLoading(isLoading) {
  sendBtn.disabled = isLoading;
  sendText.style.display = isLoading ? 'none' : 'inline';
  loading.style.display = isLoading ? 'inline' : 'none';
  messageInput.disabled = isLoading;
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (!message) return;

  addMessage(message, true);
  messageInput.value = '';
  setLoading(true);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sessionId })
    });

    const data = await response.json();

    if (data.error) {
      addMessage('Erro: ' + data.error, false);
    } else {
      addMessage(data.reply, false);
    }
  } catch (error) {
    addMessage('Erro de conexão com o servidor.', false);
  } finally {
    setLoading(false);
  }
});

clearBtn.addEventListener('click', async () => {
  try {
    await fetch('/api/clear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId })
    });
  } catch (error) {
    // Ignorar erro
  }

  messagesDiv.innerHTML = '';
  addMessage('Conversa limpa! Como posso ajudar você?', false);
});

messageInput.focus();

// ============================================
// CHATBOT IA - Frontend (Cliente)
// Conceitos aplicados:
// - const / let (declaração de variáveis)
// - Arrow functions (funções anônimas)
// - Template literals (crases com ${})
// - DOM manipulation (manipulação do HTML)
// - Event listeners (escutando eventos)
// - async/await (programação assíncrona com fetch)
// - try/catch/finally (tratamento de erros)
// - Ternário (operador condicional inline)
// - Métodos de string (trim)
// - JSON (manipulação de dados)
// ============================================

const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const sendText = document.getElementById('sendText');
const loading = document.getElementById('loading');
const clearBtn = document.getElementById('clearBtn');
const historyBar = document.getElementById('historyBar');
const historyBtn = document.getElementById('historyBtn');

const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);

let lastUserMessage = '';
let currentVersions = [];
let currentVersionIndex = 0;
let activeBotDiv = null;

const STORAGE_KEY = 'chat_history';

const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

const parseMarkdown = (text) => {
    let html = escapeHtml(text);
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ol>${match}</ol>`);
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
        if (match.includes('<ol>')) return match;
        return `<ul>${match}</ul>`;
    });
    html = html.replace(/\n/g, '<br>');
    return html;
};

const setLoading = (isLoading) => {
    sendBtn.disabled = isLoading;
    sendText.style.display = isLoading ? 'none' : 'inline';
    loading.style.display = isLoading ? 'inline' : 'none';
    messageInput.disabled = isLoading;
};

const copiarTexto = async (text, button) => {
    try {
        await navigator.clipboard.writeText(text);
        button.textContent = '✓';
        button.classList.add('copiado');
        setTimeout(() => {
            button.textContent = '📋';
            button.classList.remove('copiado');
        }, 2000);
    } catch (error) {
        console.error('Erro ao copiar:', error);
    }
};

const updateVersionArrows = () => {
    if (!activeBotDiv) return;
    const prev = activeBotDiv.querySelector('[data-dir="prev"]');
    const next = activeBotDiv.querySelector('[data-dir="next"]');
    if (prev) prev.style.opacity = currentVersions.length > 1 ? '1' : '0.3';
    if (next) next.style.opacity = currentVersions.length > 1 ? '1' : '0.3';
};

const trocarVersao = (dir) => {
    if (!activeBotDiv || currentVersions.length <= 1) return;

    currentVersionIndex += dir;
    if (currentVersionIndex < 0) currentVersionIndex = currentVersions.length - 1;
    if (currentVersionIndex >= currentVersions.length) currentVersionIndex = 0;

    const content = activeBotDiv.querySelector('.message-content');
    content.innerHTML = parseMarkdown(currentVersions[currentVersionIndex]);
    activeBotDiv.dataset.text = currentVersions[currentVersionIndex];

    const count = activeBotDiv.querySelector('.version-count');
    count.textContent = `${currentVersionIndex + 1}/${currentVersions.length}`;
    updateVersionArrows();

    const copyBtn = activeBotDiv.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.onclick = () => copiarTexto(currentVersions[currentVersionIndex], copyBtn);
    }

    salvarHistorico();
};

const regenerarResposta = async () => {
    if (!lastUserMessage || loading.style.display === 'inline') return;

    setLoading(true);
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: lastUserMessage, sessionId })
        });

        const data = await response.json();
        setLoading(false);

        if (!response.ok || data.error) {
            const div = addMessage(data.error || 'Erro ao gerar resposta.', false);
            if (data.retryAfter) iniciarContador(div, data.retryAfter);
            return;
        }

        if (activeBotDiv) {
            const content = activeBotDiv.querySelector('.message-content');
            const actions = activeBotDiv.querySelector('.msg-actions');
            const existingSelector = activeBotDiv.querySelector('.version-selector');

            if (currentVersions.length === 0) {
                const oldText = activeBotDiv.dataset.text;
                currentVersions = [oldText];
                currentVersionIndex = 0;
            }

            currentVersions.push(data.reply);
            currentVersionIndex = currentVersions.length - 1;

            content.innerHTML = parseMarkdown(currentVersions[currentVersionIndex]);
            activeBotDiv.dataset.text = currentVersions[currentVersionIndex];

            if (!existingSelector) {
                const selector = document.createElement('div');
                selector.className = 'version-selector';
                selector.innerHTML = `
                    <span class="version-arrow" data-dir="prev">◀</span>
                    <span class="version-count">1/${currentVersions.length}</span>
                    <span class="version-arrow" data-dir="next">▶</span>
                `;
                actions.before(selector);

                selector.querySelector('[data-dir="prev"]').addEventListener('click', () => trocarVersao(-1));
                selector.querySelector('[data-dir="next"]').addEventListener('click', () => trocarVersao(1));
            }

            const count = activeBotDiv.querySelector('.version-count');
            count.textContent = `${currentVersionIndex + 1}/${currentVersions.length}`;
            updateVersionArrows();

            if (activeBotDiv.querySelector('.retry-btn')) {
                activeBotDiv.querySelector('.retry-btn').addEventListener('click', () => regenerarResposta());
            }

            salvarHistorico();
        }
    } catch (error) {
        setLoading(false);
        addMessage('Erro de conexão com o servidor.', false);
    }
};

const addMessage = (text, isUser) => {
    const div = document.createElement('div');
    div.className = `message ${isUser ? 'user' : 'bot'}`;
    div.dataset.text = text;

    const contentHtml = isUser ? escapeHtml(text) : parseMarkdown(text);
    const copyButton = isUser ? '' : `<div class="msg-action copy-btn" title="Copiar resposta">📋</div>`;
    const retryButton = isUser ? '' : `<div class="msg-action retry-btn" title="Gerar outra resposta">🔄</div>`;

    div.innerHTML = `<div class="message-content">${contentHtml}</div><div class="msg-actions">${copyButton}${retryButton}</div>`;

    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    salvarHistorico();

    if (!isUser) {
        activeBotDiv = div;
        currentVersions = [];
        currentVersionIndex = 0;
        div.querySelector('.copy-btn').addEventListener('click', () => copiarTexto(text, div.querySelector('.copy-btn')));
        div.querySelector('.retry-btn').addEventListener('click', () => regenerarResposta());
    }

    return div;
};

const salvarHistorico = () => {
    const messages = [];
    document.querySelectorAll('.message').forEach(div => {
        const isUser = div.classList.contains('user');
        const text = div.querySelector('.message-content').textContent;
        messages.push({ text, isUser });
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

const carregarHistorico = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    const messages = JSON.parse(data);
    messages.forEach(({ text, isUser }) => {
        const div = document.createElement('div');
        div.className = `message ${isUser ? 'user' : 'bot'}`;
        const contentHtml = isUser ? escapeHtml(text) : parseMarkdown(text);
        const copyButton = isUser ? '' : `<div class="msg-action copy-btn" title="Copiar resposta">📋</div>`;
        const retryButton = isUser ? '' : `<div class="msg-action retry-btn" title="Gerar outra resposta">🔄</div>`;
        div.innerHTML = `<div class="message-content">${contentHtml}</div><div class="msg-actions">${copyButton}${retryButton}</div>`;
        messagesDiv.appendChild(div);
        if (!isUser) {
            div.querySelector('.copy-btn').addEventListener('click', () => copiarTexto(text, div.querySelector('.copy-btn')));
            div.querySelector('.retry-btn').addEventListener('click', () => regenerarResposta());
        }
    });
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

const verificarHistorico = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    const messages = data ? JSON.parse(data) : [];
    const hasHistory = messages.length > 1;
    historyBar.style.display = hasHistory ? 'block' : 'none';
};

const iniciarContador = (div, seconds) => {
    const content = div.querySelector('.message-content');
    const actions = div.querySelector('.msg-actions');
    if (actions) actions.style.display = 'none';
    let remaining = seconds;

    const update = () => {
        content.innerHTML = `⏱️ Limite de requisições atingido. Tente novamente em <strong>${remaining}s</strong>`;
        if (remaining <= 0) {
            content.innerHTML = '✅ Você já pode enviar mensagens novamente.';
            if (actions) actions.style.display = 'flex';
            return;
        }
        remaining--;
        setTimeout(update, 1000);
    };
    update();
};

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const message = messageInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    lastUserMessage = message;
    messageInput.value = '';
    setLoading(true);
    historyBar.style.display = 'none';

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, sessionId })
        });

        const data = await response.json();

        if (!response.ok || data.error) {
            const div = addMessage(data.error || 'Erro ao processar mensagem.', false);
            if (data.retryAfter) iniciarContador(div, data.retryAfter);
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
    } catch (error) {}

    messagesDiv.innerHTML = '';
    localStorage.removeItem(STORAGE_KEY);
    addMessage('Conversa limpa! Como posso ajudar você?', false);
    verificarHistorico();
});

messageInput.focus();
verificarHistorico();

historyBtn.addEventListener('click', () => {
    carregarHistorico();
    historyBar.style.display = 'none';
});

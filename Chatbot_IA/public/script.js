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

// --- Selecionando elementos do HTML ---
// document.getElementById() retorna um elemento pelo seu id
const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const sendText = document.getElementById('sendText');
const loading = document.getElementById('loading');
const clearBtn = document.getElementById('clearBtn');

// --- Gerando ID de sessão único ---
// Math.random() gera número decimal entre 0 e 1
// .toString(36) converte para base 36 (letras + números)
// .substr(2, 9) pega 9 caracteres a partir da posição 2
// Isso cria um ID aleatório como "x7k2m9p4q"
const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);

// --- Função que adiciona uma mensagem na tela ---
// Template literal com operador ternário para definir a classe CSS
const addMessage = (text, isUser) => {
    // document.createElement() cria um novo elemento HTML
    const div = document.createElement('div');

    // Operador ternário: isUser ? 'user' : 'bot'
    // Se isUser for true, usa 'user'; senão, usa 'bot'
    div.className = `message ${isUser ? 'user' : 'bot'}`;

    // Template literal com chamada de função dentro de ${}
    div.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;

    // appendChild() adiciona o elemento como filho
    messagesDiv.appendChild(div);

    // scrollTop controla a posição de rolagem (já para o final)
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

// --- Função de segurança: previne ataques XSS ---
// Converte caracteres especiais para HTML seguro
const escapeHtml = (text) => {
    const div = document.createElement('div');
    // .textContent define texto puro (sem interpretar HTML)
    div.textContent = text;
    // .innerHTML retorna o texto já convertido para HTML seguro
    return div.innerHTML;
};

// --- Função que mostra/esconde o estado de carregamento ---
// Parâmetro isLoading indica se está carregando ou não
const setLoading = (isLoading) => {
    sendBtn.disabled = isLoading;

    // Operador ternário inline para definir display
    // Se isLoading for true, esconde o texto e mostra o loading; senão, o contrário
    sendText.style.display = isLoading ? 'none' : 'inline';
    loading.style.display = isLoading ? 'inline' : 'none';

    messageInput.disabled = isLoading;
};

// --- Event Listener no formulário: envio de mensagem ---
// 'submit' é o evento de envio do formulário
// async indica que pode usar await dentro
chatForm.addEventListener('submit', async (e) => {
    // e.preventDefault() impede o recarregamento da página (comportamento padrão do form)
    e.preventDefault();

    // .trim() remove espaços em branco no início e fim da string
    const message = messageInput.value.trim();

    // Se a mensagem estiver vazia, não faz nada
    if (!message) return;

    addMessage(message, true);   // adiciona mensagem do usuário na tela
    messageInput.value = '';     // limpa o campo de input
    setLoading(true);            // ativa estado de carregamento

    // --- try/catch/finally: tratamento de erros ---
    // try: tenta executar o código
    try {
        // fetch() faz requisições HTTP (comunicação com o servidor)
        // await pausa até a resposta chegar
        const response = await fetch('/api/chat', {
            method: 'POST', // método HTTP
            headers: { 'Content-Type': 'application/json' }, // tipo de conteúdo
            // JSON.stringify() converte objeto para texto JSON
            body: JSON.stringify({ message, sessionId })
        });

        // .json() converte a resposta JSON em objeto JavaScript
        const data = await response.json();

        // Condicionais: se tiver erro, mostra erro; senão, mostra resposta
        if (data.error) {
            addMessage('Erro: ' + data.error, false);
        } else {
            addMessage(data.reply, false);
        }
    } catch (error) {
        // Captura erros de conexão (servidor offline, etc.)
        addMessage('Erro de conexão com o servidor.', false);
    } finally {
        // finally SEMPRE executa (com ou sem erro)
        setLoading(false); // desativa estado de carregamento
    }
});

// --- Event Listener no botão de limpar conversa ---
clearBtn.addEventListener('click', async () => {
    try {
        await fetch('/api/clear', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId })
        });
    } catch (error) {
        // Ignora erros de conexão ao limpar
    }

    // innerHTML = '' remove todo o conteúdo do elemento
    messagesDiv.innerHTML = '';
    addMessage('Conversa limpa! Como posso ajudar você?', false);
});

// --- Foco automático no campo de input ---
// .focus() coloca o cursor no campo quando a página carrega
messageInput.focus();

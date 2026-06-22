# 🤖 Chatbot IA

Aplicação de chatbot com inteligência artificial utilizando a API do Google Gemini. Interface web interativa com suporte a markdown, histórico de conversas, regeneração de respostas e navegação entre versões.

---

## 📋 Índice

- [Funcionalidades](#funcionalidades)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Variáveis de Ambiente](#variáveis-de-ambiente)

---

## ✅ Funcionalidades

- **Chat em tempo real** com o modelo `gemini-2.5-flash` do Google Gemini
- **Renderização de Markdown** — negrito, itálico, código, listas e títulos
- **Cópia de respostas** — botão 📋 para copiar o conteúdo ao clipboard
- **Regeneração de respostas** — botão 🔄 para gerar uma nova resposta à mesma mensagem
- **Navegação entre versões** — setas ◀ ▶ para alternar entre respostas regeneradas
- **Histórico de conversas** — persistência via `localStorage` no navegador
- **Limpeza de sessão** — botão 🗑️ para apagar todo o histórico
- **Tratamento de erros** — mensagens amigáveis para rate limiting (429) e erros de conexão
- **Contador regressivo** — exibe tempo de espera quando a quota da API é atingida
- **Interface responsiva** — layout adaptável para dispositivos móveis
- **Design dark** — tema escuro com efeitos de hover e animações suaves

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC (Model-View-Controller)** no backend e separação clara de camadas:

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENTE                            │
│  index.html  ─  script.js  ─  style.css                 │
│  (DOM, eventos, fetch, localStorage)                    │
├─────────────────────────────────────────────────────────┤
│                   API REST (Express)                    │
│                                                         │
│  Routes ──► Controller ──► Service ──► Gemini API       │
│                        └──► Repository (Map em memória) │
├─────────────────────────────────────────────────────────┤
│               MIDDLEWARES & UTILS                        │
│  erro.middleware.js    criarErro.js                      │
└─────────────────────────────────────────────────────────┘
```

### Camadas do Backend

| Camada | Responsabilidade |
|--------|------------------|
| **Routes** | Define os endpoints HTTP e conecta ao controller |
| **Controller** | Recebe requisições, valida entrada e retorna respostas |
| **Service** | Lógica de negócio — formata histórico, comunica com a API do Gemini |
| **Repository** | Armazena e recupera dados (Map em memória, limitado a 20 mensagens por sessão) |
| **Middleware** | Tratamento centralizado de erros |
| **Config** | Constantes da API (modelo, URL, chave) |
| **Utils** | Funções auxiliares reutilizáveis |

---

## 💻 Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Node.js** | — | Runtime do servidor |
| **Express.js** | ^4.18.2 | Framework web e API REST |
| **Google Gemini API** | gemini-2.5-flash | Modelo de linguagem para geração de texto |
| **@google/generative-ai** | ^0.21.0 | Cliente oficial do Google AI |
| **dotenv** | ^16.3.1 | Carregamento de variáveis de ambiente |
| **JavaScript (ES6+)** | — | Linguagem principal (módulos ES) |
| **HTML5** | — | Estrutura da interface |
| **CSS3** | — | Estilização, animações e layout responsivo |

---

## 📁 Estrutura do Projeto

```
Chatbot_IA/
├── .env                                # Variáveis de ambiente (chave da API)
├── package.json                        # Dependências e scripts
│
├── public/                             # Frontend (arquivos estáticos)
│   ├── index.html                      # Interface do chat
│   ├── script.js                       # Lógica do cliente (DOM, fetch, eventos)
│   └── style.css                       # Estilização e tema dark
│
├── src/                                # Backend (servidor)
│   ├── server.js                       # Ponto de entrada — inicia o servidor
│   ├── app.js                          # Configuração do Express (middlewares, rotas)
│   │
│   ├── config/
│   │   └── gemini.js                   # Configuração da API do Gemini (modelo, URL)
│   │
│   ├── routes/
│   │   └── chat.routes.js              # Definição dos endpoints da API
│   │
│   ├── controllers/
│   │   └── chat.controller.js          # Controller — recebe req, chama service, retorna res
│   │
│   ├── services/
│   │   └── chat.service.js             # Service — lógica de negócio e comunicação com API
│   │
│   ├── repositories/
│   │   └── conversation.repository.js  # Repository — armazenamento em memória (Map)
│   │
│   ├── middlewares/
│   │   └── erro.middleware.js          # Middleware centralizado de tratamento de erros
│   │
│   └── utils/
│       └── criarErro.js                # Função auxiliar para criar erros padronizados
│
└── node_modules/                       # Dependências instaladas
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- Chave de API do Google Gemini — gere em [Google AI Studio](https://aistudio.google.com/apikey)

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar na pasta do projeto
cd Chatbot_IA

# Instalar dependências
npm install
```

### Configuração

Crie o arquivo `.env` na raiz do projeto:

```env
GEMINI_API_KEY=sua_chave_de_api_aqui
PORT=3000
```

### Executar

```bash
# Produção
npm start

# Desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## 🌐 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/` | Health check — verifica se a API está rodando |
| `POST` | `/api/chat` | Envia mensagem e retorna resposta da IA |
| `POST` | `/api/clear` | Limpa o histórico de uma sessão |

### POST `/api/chat`

**Request body:**

```json
{
  "message": "O que é inteligência artificial?",
  "sessionId": "session_abc123xyz"
}
```

**Response (200):**

```json
{
  "reply": "Inteligência artificial é..."
}
```

**Response (429 — rate limit):**

```json
{
  "error": "Limite de requisições atingido.",
  "retryAfter": 30
}
```

### POST `/api/clear`

**Request body:**

```json
{
  "sessionId": "session_abc123xyz"
}
```

**Response (200):**

```json
{
  "success": true
}
```

---

## 🔧 Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | Sim | Chave de acesso à API do Google Gemini |
| `PORT` | Não | Porta do servidor (padrão: `3000`) |

---

## 📐 Padrões e Convenções

- **Módulos ES** — todo o código usa `import`/`export` (`"type": "module"` no package.json)
- **Separação de responsabilidades** — cada camada tem uma única função
- **Tratamento de erros** — erros são padronizados com `criarErro()` e encaminhados ao middleware central
- **Histórico limitado** — cada sessão armazena no máximo 20 mensagens para controlar o custo da API
- **Sessão por cliente** — `sessionId` é gerado no frontend com `Math.random()` e mantido durante a sessão do navegador

---

*Projeto desenvolvido como exercício prático de programação Full Stack com integração a APIs de inteligência artificial.*

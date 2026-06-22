# 🎯 Jogo de Adivinhação

Jogo interativo de adivinhação de números desenvolvido em JavaScript, seguindo o padrão arquitetural **MVC (Model-View-Controller)**. O jogador deve adivinhar um número secreto entre 1 e 100, recebendo dicas visuais a cada tentativa.

---

## 📋 Índice

- [Funcionalidades](#funcionalidades)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Modelo de Dados](#modelo-de-dados)

---

## ✅ Funcionalidades

- Geração de número secreto aleatório (1–100)
- Validação de entrada (intervalo numérico e duplicatas)
- Dicas direcionais: "Muito baixo" / "Muito alto"
- Histórico visual de palpites com código de cores:
  - 🔵 Azul — palpite abaixo do número secreto
  - 🔴 Vermelho — palpite acima do número secreto
  - 🟢 Verde — acerto
- Contador de tentativas
- Registro de melhor recorde via `localStorage`
- Mensagem de parabéns com contagem de tentativas
- Indicação de novo recorde
- Interface responsiva com tema escuro e efeito glassmorphism

---

## 🏗️ Arquitetura

O projeto é estruturado seguindo o padrão **MVC**, com separação clara de responsabilidades:

```
┌─────────────────────────────────────────────┐
│                  VIEW                       │
│  Manipulação do DOM — exibe dados e         │
│  captura ações do usuário                   │
├─────────────────────────────────────────────┤
│                CONTROLLER                   │
│  Coordena Model e View — processa lógica    │
│  de fluxo e eventos                         │
├─────────────────────────────────────────────┤
│                  MODEL                      │
│  Estado do jogo, regras de negócio e        │
│  persistência (localStorage / Map)          │
└─────────────────────────────────────────────┘
```

O projeto apresenta duas implementações paralelas:

| Camada | Cliente (`public/`) | Servidor (`src/`) |
|--------|---------------------|-------------------|
| **Model** | Regras do jogo + `localStorage` | Armazenamento em memória (`Map`) |
| **View** | Manipulação do DOM | — |
| **Controller** | Eventos do usuário | Handlers HTTP (Express) |
| **Service** | — | Lógica de negócio |
| **Routes** | — | Definição de endpoints REST |

---

## 💻 Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **JavaScript (ES6+)** | Linguagem principal, módulos ES |
| **HTML5** | Estrutura da interface |
| **CSS3** | Estilização, layout flexbox, efeitos visuais |
| **Express.js** | Servidor HTTP e API REST (versão server-side) |
| **localStorage** | Persistência de recorde no navegador |

---

## 📁 Estrutura do Projeto

```
Jogo_Adivinhacao/
├── index.html                    # Interface principal (standalone)
├── app.js                        # Ponto de entrada do cliente
│
├── public/                       # Versão client-side (servida pelo Express)
│   ├── index.html
│   ├── app.js
│   ├── controllers/
│   │   └── game.controller.js    # Controller — coordena Model e View
│   ├── models/
│   │   └── game.model.js         # Model — estado e regras do jogo
│   └── views/
│       └── game.view.js          # View — manipulação do DOM
│
├── src/                          # Versão server-side (API REST)
│   ├── app.js                    # Configuração do Express
│   ├── controllers/
│   │   └── game.controller.js    # Controller HTTP (req/res)
│   ├── models/
│   │   └── game.model.js         # Model — persistência em memória
│   ├── routes/
│   │   └── game.routes.js        # Definição de rotas da API
│   ├── services/
│   │   └── game.service.js       # Service — lógica de negócio
│   ├── utils/
│   │   └── gerarNumero.js        # Utilitário — geração de números
│   └── views/
│       └── game.view.js          # View (duplicata do client-side)
│
└── server.js                     # Ponto de entrada do servidor
```

---

## 🚀 Como Executar

### Versão standalone (recomendada)

```bash
# Na raiz do projeto
python3 -m http.server 8000
```

Acesse `http://localhost:8000/public/` no navegador.

### Versão com servidor Express

```bash
# Instalar dependências (caso necessário)
npm install express

# Iniciar o servidor
node server.js
```

Acesse `http://localhost:3000` no navegador.

---

## 🌐 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/game/novo` | Cria um novo jogo e retorna o estado inicial |
| `POST` | `/api/game/chutar` | Envia um palpite (`{ palpite, sessionId }`) |
| `GET` | `/api/game/recorde?sessionId=` | Consulta o melhor recorde do jogador |

### Exemplo de requisição — Chutar

```http
POST /api/game/chutar
Content-Type: application/json

{
  "palpite": 42,
  "sessionId": "abc123"
}
```

### Exemplo de resposta

```json
{
  "tipo": "baixo",
  "mensagem": "Muito baixo! Tente um número maior.",
  "tentativas": 3
}
```

---

## 📊 Modelo de Dados

### Estado do jogo (servidor)

```javascript
{
  sessionId: "string",       // Identificador da sessão
  numeroSecreto: 42,         // Número a ser adivinhado (1-100)
  tentativas: 3,             // Quantidade de palpites realizados
  palpites: [10, 25, 42],    // Histórico de palpites
  recorde: 5                 // Melhor pontuação do jogador
}
```

### Tipos de retorno do palpite

| `tipo` | Significado |
|--------|-------------|
| `acerto` | O palpite corresponde ao número secreto |
| `baixo` | O palpite é menor que o número secreto |
| `alto` | O palpite é maior que o número secreto |
| `erro` | Entrada inválida (fora do intervalo ou duplicada) |

---

*Projeto desenvolvido como exercício prático de programação JavaScript — padrão MVC, módulos ES6 e arquitetura de software.*

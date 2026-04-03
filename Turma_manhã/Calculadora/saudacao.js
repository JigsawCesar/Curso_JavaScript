import PromptSync from "prompt-sync";

const prompt = PromptSync();
const verde = "\x1b[32m";
const negrito = "\x1b[1m";
const roxo = "\x1b[34m";
const reset = "\x1b[0m";

const saudacao = (nome) => {
    

    console.log(`${roxo}    
╭───────────────────────────────
│${reset} Olá, ${verde}${negrito}${nome}${reset}!${roxo}                              
│${reset} Seja bem-vindo à Calculadora!        ${roxo}
╰───────────────────────────────${reset}\n`);

    prompt (`Pressione ${verde}${negrito}Enter${reset} para continuar...`);


    
};

export default saudacao;
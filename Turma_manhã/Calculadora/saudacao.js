import PromptSync from "prompt-sync";
import { negrito, reset, roxo, verde } from "./cores_terminal.js";

const prompt = PromptSync();

const saudacao = (nome) => {
    

    console.log(`${roxo}    
╭───────────────────────────────
│${reset} Olá, ${verde}${negrito}${nome}${reset}!${roxo}                              
│${reset} Seja bem-vindo à Calculadora!        ${roxo}
╰───────────────────────────────${reset}\n`);

    prompt (`Pressione ${verde}${negrito}Enter${reset} para continuar...`);


    
};

export default saudacao;
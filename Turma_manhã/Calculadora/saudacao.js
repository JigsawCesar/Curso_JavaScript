import menu from "./menu.js";
const saudacao = (nome) => {
    
    const verde = "\x1b[32m";
    const negrito = "\x1b[1m";
    const roxo = "\x1b[34m";
    const reset = "\x1b[0m";

    console.log(`${roxo}    
    ╭───────────────────────────────
    │${reset} Olá, ${verde}${negrito}${nome}${reset}!${roxo}                              
    │${reset} Seja bem-vindo à Calculadora!        ${roxo}
    ╰───────────────────────────────${reset}`);
    setTimeout(function() {
        
        console.clear();
        menu();
        
    }, 2000);
    
};

export default saudacao;
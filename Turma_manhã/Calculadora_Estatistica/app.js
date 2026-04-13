import PromptSync from "prompt-sync";
import adicionar from "./adicionar.js";
import remover from "./remover.js";
import media from "./media.js";
import mediana from "./mediana.js";
import menu from "./menu.js";

// Variáveis que armazenam as cores do terminal
const negrito = "\x1b[1m";
const vermelho = "\x1b[31m";
const reset = "\x1b[0m";
const ciano = "\x1b[36m";
const magenta = "\x1b[35m";


const prompt = PromptSync();
let escolha;
let lista =[10,20,30];
let resultado;
  
do {
    menu();
    escolha = parseInt(prompt(`${negrito}${ciano}⦙ Digite a opção desejada: ${reset}`));
    console.clear();

    switch (Number(escolha)) {
        case 0:
            console.log(`\n${negrito}${magenta}⦙ Obrigado por usar a calculadora.\n⦙ Até a próxima!${reset}\n`);
            setTimeout(function() {
                
                console.clear();
                
            }, 2000);
            break;
        case 1:
            adicionar();
            break;
        case 2:
            remover();
            break;
        case 3:
            resultado = media(lista);
            console.log(`${negrito}${magenta}A média é: ${resultado.toFixed(2)}${reset}`);
            break;
        case 4:
            resultado = mediana(lista);
            console.log(`${negrito}${magenta}A mediana é: ${resultado.toFixed(2)}${reset}`);
            break;
        default:

            break;
    };
} while (escolha != 0);
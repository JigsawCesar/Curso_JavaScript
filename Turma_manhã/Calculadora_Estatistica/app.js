import PromptSync from "prompt-sync";
import adicionar from "./adicionar.js";
import remover from "./remover.js";
import media from "./media.js";
import mediana from "./mediana.js";
import menu from "./menu.js";
import saudacao from "../Calculadora/saudacao.js";
import { ciano, roxo, magenta, negrito, reset } from "../Calculadora/cores_terminal.js";

const prompt = PromptSync();
let escolha;
let lista =[10,20,30];
let resultado;
let nome;

console.log();
nome = prompt(`${negrito}${ciano}⦙ Digite seu nome:${reset} `);
console.clear();

saudacao(nome);

do {
    menu();
    escolha = parseInt(prompt(`${negrito}${ciano}⦙ Digite a opção desejada: ${reset}`));
    console.clear();

    switch (Number(escolha)) {
        case 0:
            console.log(`${roxo}    
╭────────────────────────────────────╮
│${reset}  Obrigado por usar a calculadora${reset}${roxo}   │                              
│${reset}           Até a próxima!${roxo}           │
╰────────────────────────────────────╯${reset}\n`);
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
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        case 4:
            resultado = mediana(lista);
            console.log(`${negrito}${magenta}A mediana é: ${resultado.toFixed(2)}${reset}`);
            break;
        default:

            break;
    };
} while (escolha != 0);
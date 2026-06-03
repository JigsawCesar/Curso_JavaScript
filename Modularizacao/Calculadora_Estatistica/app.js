import PromptSync from "prompt-sync";
import adicionar_numero from "./adicionar.js";
import remover_numero from "./remover.js";
import calcular_media from "./media.js";
import calcular_mediana from "./mediana.js";
import menu from "./menu.js";
import saudacao from "../Calculadora/saudacao.js";
import { ciano, roxo, magenta, negrito, vermelho, verde, reset } from "../Calculadora/cores_terminal.js";

const prompt = PromptSync();
let escolha;
let lista =[];
let nome = ``;
let numero = 0;
let resultado = 0;

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
            numero = Number(prompt(`${negrito}${ciano}⦙ Digite o número deseja adicionar: ${reset}`));
            console.clear();
            adicionar_numero(lista, numero);
            break;
        case 2:
            remover_numero(lista);
            break;
        case 3:
            if (lista.length === 0){
                console.log(`\n${negrito}${vermelho}⦙ A lista está vazia!${reset}\n`);
                prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
            } else {console.log(`${negrito}${magenta}⦙ Números na lista:${reset} ${lista.join(", ")}\n`);
               prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
            }
            break;
        case 4:
            resultado = calcular_media(lista);
            console.log(`${negrito}${magenta}⦙ Números na lista:${reset} ${lista.join(", ")}\n${negrito}${magenta}⦙ A média é:${reset} ${resultado.toFixed(2)}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
            break;
        case 5:
            lista.sort((a, b) => a - b);
            resultado = calcular_mediana(lista);
            console.log(`${negrito}${magenta}⦙ Números na lista:${reset} ${lista.join(", ")}\n${negrito}${magenta}⦙ A mediana é:${reset} ${resultado}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
            break;
        default:
            console.log(`\n${negrito}${vermelho}⦙ Opção inválida. \n⦙ Por favor, digite uma opção válida.${reset}\n`);
            break;
    };
} while (escolha != 0);

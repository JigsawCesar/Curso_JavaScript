import PromptSync from "prompt-sync";
import adicao from "./adicao.js";
import subtracao from "./subtracao.js";
import multiplicacao from "./multiplicacao.js";
import divisao from "./divisao.js";
import potenciacao from "./potenciacao.js";
import raiz_quadrada from "./raiz_quadrada.js";
import porcentagem from "./porcentagem.js";
import saudacao from "./saudacao.js";
import menu from "./menu.js";
import { ciano, magenta, negrito, reset, vermelho } from "./cores_terminal.js";

const prompt = PromptSync();

let number1 = 0;
let number2 = 0;
let resultado = 0;
let opcao = 0;
let nome;

console.log();
nome = prompt(`${negrito}${ciano}⦙ Digite seu nome:${reset} `);
console.clear();

saudacao(nome);

do {
    menu();
    opcao = parseInt(prompt(`${negrito}${ciano}⦙ Digite a opção desejada: ${reset}`));
    console.clear();
    
    switch (opcao) {
        case 0:
            console.log(`\n${negrito}${magenta}⦙ Obrigado por usar a calculadora.\n⦙ Até a próxima!${reset}\n`);
            setTimeout(function() {
                
                console.clear();
                
            }, 2000);
            break;
            
            case 1:
                adicao();
                break;
                
            case 2:
                subtracao();
                break;
                    
            case 3:
                multiplicacao();
                break;
                
            case 4:
                divisao();
                break;
                    
            case 5:
                potenciacao();
                break;
                        
            case 6:
                raiz_quadrada();
                break;
                            
            case 7:
                porcentagem();
                break;
                                
            default:
                console.log(`\n${negrito}${vermelho}⦙ Opção inválida. \n⦙ Por favor, digite uma opção válida.${reset}\n`);    
                break;
            };
    
            
        } while (opcao != 0);


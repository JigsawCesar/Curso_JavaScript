import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { ciano, roxo, negrito, reset, laranja } from "../../Cores/cores_terminal.js";
import menu from "./menu.js";
import { medicos, consultas, pacientes } from "./dados.js";

import adicionar_consulta from "./create.js";
import listar_consultas from "./read.js";
import atualizar_consulta from "./update.js";
import cancelar_consulta from "./delete.js";


let opcao = 0;

do {
    menu();
    opcao = Number(prompt(`${negrito}${ciano}⦙ Digite a opção desejada: ${reset}`));
    console.clear();

    switch (opcao) {
        case 0:
            console.log(`${roxo}    
╭────────────────────────────────────╮                              
│${reset}           Até a próxima!${roxo}           │
╰────────────────────────────────────╯${reset}\n`);
            setTimeout(function() {
                
                console.clear();
                
            }, 2000);
            break;

        case 1:
            adicionar_consulta(consultas, medicos, pacientes);
            
            break;

        case 2:
            listar_consultas();
            break;

        case 3:
            atualizar_consulta();
            break;

        case 4:
            cancelar_consulta();
            break;

        default:
            console.log(`${negrito}${laranja}⦙ Opção inválida! Tente novamente.${reset}`);
            break;
    };
} while (opcao !== 0);
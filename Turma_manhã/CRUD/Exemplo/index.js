import promptSync from 'prompt-sync';
const prompt = promptSync();

// Importando nossos dados e funções
import contatos from './contatos.js';
import listar_contato from './read.js';
import cadastrar_usuario from './create.js';
import atualizar_cadastro from './update.js';
import remover_contato from './delete.js';
import menu from './menu.js';
import { ciano, roxo, magenta, negrito, verde, reset } from "../../Calculadora/cores_terminal.js";

let opcao = 0;

// O loop mantém o programa rodando até o usuário escolher sair
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
            break
        case 1:
            // Operação: READ
            listar_contato(contatos);
            console.log();
            prompt(`${negrito}${magenta}⦙ Digite${reset} ${verde}Enter${reset} ${negrito}${magenta}para voltar ao menu ...${reset}`)
            break
        case 2:
            // Operação: CREATE
            let telefones = [];
            let nome = prompt(`${negrito}${ciano}⦙ Nome: ${reset}`);
            let email = prompt(`${negrito}${ciano}⦙ Email: ${reset}`);
            
            // Loop para múltiplos telefones
            let adicionar_mais = 's'
            while (adicionar_mais.toLowerCase() === 's') {
                telefones.push(prompt(`${negrito}${ciano}⦙ Telefone: ${reset}`));
                adicionar_mais = prompt(`${negrito}${ciano}⦙ Adicionar outro telefone? (s/n): ${reset}`);
            }

            let novo_contato = { nome, telefones, email };
            const adicionou = cadastrar_usuario(contatos, novo_contato);

            if (adicionou) {
                console.log(`${negrito}${magenta}⦙ Contato adicionado com sucesso!${reset}`);
            };
            break
        case 3:
            // Operação: UPDATE
            let id_atualizar = parseInt(prompt(`${negrito}${ciano}⦙ ID do contato a ser atualizado: ${reset}`));
            
            let novos_dados = {
                nome: prompt(`${negrito}${ciano}⦙ Novo Nome (ou ${verde}Enter${reset} ${negrito}${ciano}para manter): ${reset}`),
                email: prompt(`${negrito}${ciano}⦙ Novo Email (ou ${verde}Enter${reset} ${negrito}${ciano}para manter): ${reset}`),
                telefones: []
            };

            let atualizaTel = prompt(`${negrito}${ciano}⦙ Deseja atualizar os telefones? (s/n): ${reset}`);

            if (atualizaTel.toLowerCase() === 's') {
                let editar_mais = 's';
                while (editar_mais.toLowerCase() === 's') {
                    novos_dados.telefones.push(prompt(`${negrito}${ciano}⦙ Novo Telefone: ${reset}`));
                    editar_mais = prompt(`${negrito}${ciano}⦙ Adicionar outro telefone? (s/n): ${reset}`);
                };
            };

            const atualizou = atualizar_cadastro(contatos, id_atualizar, novos_dados);
            
            if (atualizou) {
                console.log(`${negrito}${magenta}⦙ Contato atualizado com sucesso!${reset}`);
            };
            break
        case 4:
            // Operação: DELETE
            let id_remover = parseInt(prompt(`${negrito}${ciano}⦙ ID do contato a ser removido: ${reset}`));
            
            // Requisito de Confirmação
            let confirmar = prompt(`${negrito}${ciano}⦙ Tem certeza que deseja remover este contato? (s/n): ${reset}`);
            
            if (confirmar.toLowerCase() === 's') {
                remover_contato(contatos, id_remover);
                console.log(`${negrito}${magenta}⦙ Contato removido com sucesso!${reset}`);
            } else {
                console.log(`${negrito}${magenta}⦙ Operação cancelada.${reset}`);
            };
            break
        default:
            console.log(`${negrito}${magenta}⦙ Opção inválida. Tente novamente.${reset}`);
            break
    };
} while (opcao != 0);
import { vermelho, roxo, ciano, reset, negrito, rosa, verde } from "../Flashcard/cores_terminal.js";
import baralhos from "../Flashcard/Dados/baralho.js";
import flashcards from "../Flashcard/Dados/flashcard.js";
import adicionar_baralho from "../Flashcard/Create/adicionar_baralho.js";
import adicionar_flashcard from "../Flashcard/Create/adicionar_flashcard.js";
import listar_baralho from "../Flashcard/Read/listar_baralho.js";
import listar_flashcard from "../Flashcard/Read/listar_flashcard.js";
import listar_por_baralho from "../Flashcard/Read/listar_por_baralho.js";
import atualizar_baralhos from "../Flashcard/Update/atualizar_baralho.js";
import atualizar_flashcards from "../Flashcard/Update/atualizar_flashcard.js";
import remover_baralho from "../Flashcard/Delete/remover_baralho.js";
import remover_flashcard from "../Flashcard/Delete/remover_flashcard.js";
import buscar_pergunta from "../Flashcard/Search/buscar_pergunta.js";
import menu from "../Flashcard/menu.js"

import express from "express";

const app = express();
const porta = 3000;

app.use(express.json());

app.get(("/"), (req, resp) => {
    resp.status(200).send({ mensagem: "Servidor funcionando!" });
});

app.post(("/baralhos"), (req, resp) => {
    const {}
})

app.listen((porta), () =>{
  console.log(`Servidor rodando na porta ${porta}!`);
});

let opcao = 0;
let id_escolhido = 0;
let confirmar = "";
let id_remover = 0;
let novos_dados = {};


/*
do {

    menu();
    opcao = Number(prompt(`${negrito}${ciano}⦙ Digite a opção desejada: ${reset}`));
    console.clear();

    switch (opcao) {

        case 0:

            console.log(`${roxo}    
╭────────────────────────────────────╮                              
│${reset}        👋 Até a próxima!${roxo} 👋        │
╰────────────────────────────────────╯${reset}\n`);
            setTimeout(function() {
                
                console.clear();
                
            }, 2000);

        break;
        
        case 1:

            let novo_baralho = {
                titulo: prompt(`${negrito}${ciano}⦙ Digite o título do baralho: ${reset}`)
            };
            console.clear();
            adicionar_baralho(novo_baralho);
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);
            console.clear();
        break;
    
        case 2:

            let novo_flashcard = { 
                pergunta:prompt(`${negrito}${ciano}⦙ Digite sua pergunta: ${reset}`),
                resposta: prompt(`${negrito}${ciano}⦙ Digite a sua resposta: ${reset}`),
                idBaralho: Number(prompt(`${negrito}${ciano}⦙ Digite o ID do baralho: ${reset}`))
            };
            console.clear();
            adicionar_flashcard(novo_flashcard,flashcards);
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 3:
            
            listar_baralho(baralhos);
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 4:
            
            listar_flashcard(flashcards);
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 5:
            
            id_escolhido = prompt(`${negrito}${ciano}⦙ Digite o ID do baralho desejado: ${reset}`);
            listar_por_baralho(id_escolhido);
            
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 6:
                let id = prompt(`${negrito}${ciano}⦙ Digite o id do baralho: ${reset}`)
                novos_dados = {
                    titulo: prompt(`${negrito}${ciano}⦙ Digite um novo titulo: ${reset}`)
                };
                console.clear();
                atualizar_baralhos(id, novos_dados, baralhos);
                console.log();
                prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 7:

            let id_flashcard = prompt(`${negrito}${ciano}⦙ Digite o ID do flashcard: ${reset}`);
            novos_dados = {
                pergunta : prompt(`${negrito}${ciano}⦙ Digite sua pergunta: ${reset}`),
                resposta: prompt( `${negrito}${ciano}⦙ Digite sua resposta: ${reset}`)
        
            };
            console.clear();
            atualizar_flashcards(id_flashcard, novos_dados);
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 8:
            
            id_remover = parseInt(prompt(`${negrito}${ciano}⦙ ID do baralho a ser removido: ${reset}`));
            confirmar = prompt(`${negrito}${ciano}⦙ Tem certeza que deseja remover este baralho? (sim/não): ${reset}`);
            console.clear();

            if (confirmar.toLowerCase() === 'sim') {
                remover_baralho(baralhos, flashcards, id_remover);
                console.log(`${negrito}${rosa}⦙ Baralho removido com sucesso!${reset}`);
            } else {
                console.log(`${negrito}${vermelho}⦙ Operação cancelada.${reset}`);
            };
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 9:

            id_remover = parseInt(prompt(`${negrito}${ciano}⦙ ID do flashcard a ser removido: ${reset}`));
            confirmar = prompt(`${negrito}${ciano}⦙ Tem certeza que deseja remover este flashcard? (sim/não): ${reset}`);
            console.clear();

            if (confirmar.toLowerCase() === 'sim') {
                remover_flashcard(flashcards, id_remover);
                console.log(`${negrito}${rosa}⦙ Flashcard removido com sucesso!${reset}`);
            } else {
                console.log(`${negrito}${vermelho}⦙ Operação cancelada.${reset}`);
            };
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 10:
            
            buscar_pergunta(flashcards);
            console.log();
            prompt(`${negrito}${rosa}⦙ Pressione${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);
            
        break;
        
        default:

            console.log(`${negrito}${vermelho}⦙ Opção inválida. Tente novamente.${reset}`);
            
        break;
    };

} while (opcao != 0);

*/
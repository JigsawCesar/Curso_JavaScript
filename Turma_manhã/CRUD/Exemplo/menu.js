import { negrito, vermelho, reset, amarelo, roxo } from "../../Calculadora/cores_terminal.js";

const menu = () => {
    console.log(`
${roxo}=======================================
========== ${negrito}${amarelo}Menu de Contatos${reset} ${roxo}===========
=======================================
${roxo}⦙                                      ⦙
${roxo}⦙ ${negrito}${amarelo}[1]${reset} - ${amarelo}Listar Contatos${reset}                ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[2]${reset} - ${amarelo}Adicionar Contato${reset}              ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[3]${reset} - ${amarelo}Atualizar Contato${reset}              ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[4]${reset} - ${amarelo}Remover Contato${reset}                ${roxo}⦙
${roxo}⦙                                      ⦙
${roxo}⦙ ${vermelho}[0]${reset} - ${vermelho}Sair${reset}                           ${roxo}⦙
${roxo}=======================================${reset}`);
    
};

export default menu;
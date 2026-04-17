import { amarelo, negrito, reset, roxo, vermelho } from "../Calculadora/cores_terminal.js";

const menu = () =>{

    console.log(`
${roxo}====================================================
================= ${negrito}${amarelo}Menu de Opções${reset} ${roxo}===================
====================================================
${roxo}⦙                                                   ⦙
${roxo}⦙ ${negrito}${amarelo}[1]${reset} - ${amarelo}Adicionar números a uma lista${reset}               ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[2]${reset} - ${amarelo}Remover o último número adicionado a lista${reset}  ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[3]${reset} - ${amarelo}Listar os números${reset}                           ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[4]${reset} - ${amarelo}Calcular a Média da lista${reset}                   ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[5]${reset} - ${amarelo}Calcular a Mediana da lista${reset}                 ${roxo}⦙
${roxo}⦙                                                   ⦙
${roxo}⦙ ${vermelho}[0]${reset} - ${vermelho}Sair${reset}                                        ${roxo}⦙
${roxo}====================================================${reset}`);

};

export default menu;

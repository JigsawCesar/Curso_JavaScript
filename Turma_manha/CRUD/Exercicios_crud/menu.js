import { negrito, vermelho, reset, amarelo, roxo } from "../../Cores/cores_terminal.js";

const menu = () => {
    console.log(`
${roxo}=======================================
============ ${negrito}${amarelo}Menu de Opções${reset} ${roxo}===========
=======================================
${roxo}⦙                                      ⦙
${roxo}⦙ ${negrito}${amarelo}[1]${reset} - ${amarelo}Agendar Nova Consulta${reset}          ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[2]${reset} - ${amarelo}Listar as Consultas${reset}            ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[3]${reset} - ${amarelo}Atualizar Consulta${reset}             ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[4]${reset} - ${amarelo}Cancelar Consulta${reset}              ${roxo}⦙
${roxo}⦙                                      ⦙
${roxo}⦙ ${vermelho}[0]${reset} - ${vermelho}Sair${reset}                           ${roxo}⦙
${roxo}=======================================${reset}`);
    
};

export default menu;
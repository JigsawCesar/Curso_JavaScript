import { negrito, vermelho, reset, amarelo, roxo } from "./cores_terminal.js";

const menu = () => {
    console.log(`
${roxo}=======================================
=========== ${negrito}${amarelo}Menu de Opções${reset} ${roxo}============
=======================================
${roxo}⦙                                      ⦙
${roxo}⦙ ${negrito}${amarelo}[1]${reset} - ${amarelo}Soma${reset}                           ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[2]${reset} - ${amarelo}Subtração${reset}                      ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[3]${reset} - ${amarelo}Multiplicação${reset}                  ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[4]${reset} - ${amarelo}Divisão${reset}                        ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[5]${reset} - ${amarelo}Potenciação${reset}                    ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[6]${reset} - ${amarelo}Raiz Quadrada${reset}                  ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[7]${reset} - ${amarelo}Porcentagem${reset}                    ${roxo}⦙
${roxo}⦙                                      ⦙
${roxo}⦙ ${vermelho}[0]${reset} - ${vermelho}Sair${reset}                           ${roxo}⦙
${roxo}=======================================${reset}`);
    
};

export default menu;
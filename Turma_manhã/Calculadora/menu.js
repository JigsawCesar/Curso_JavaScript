const amarelo = "\x1b[33m";
const roxo = "\x1b[34m";
const negrito = "\x1b[1m";
const vermelho = "\x1b[31m";
const reset = "\x1b[0m";

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
const amarelo = "\x1b[33m";
const roxo = "\x1b[34m";
const negrito = "\x1b[1m";

console.log(`
${roxo}====================================================
================= ${negrito}${amarelo}Menu de Opções${reset} ${roxo}===================
====================================================
${roxo}⦙                                                   ⦙
${roxo}⦙ ${negrito}${amarelo}[1]${reset} - ${amarelo}Adicionar números a uma lista${reset}               ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[2]${reset} - ${amarelo}Remover o último número adicionado a lista${reset}  ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[3]${reset} - ${amarelo}Calcular a Média da lista${reset}                   ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[4]${reset} - ${amarelo}Calcular a Mediana da lista${reset}                 ${roxo}⦙
${roxo}⦙                                                   ⦙
${roxo}⦙ ${vermelho}[0]${reset} - ${vermelho}Sair${reset}                                        ${roxo}⦙
${roxo}====================================================${reset}`);

export default menu;
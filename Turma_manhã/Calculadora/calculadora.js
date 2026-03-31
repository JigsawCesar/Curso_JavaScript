const prompt = require(`prompt-sync`)();

const reset = "\x1b[0m";
const negrito = "\x1b[1m";
const roxo = "\x1b[34m";
const ciano = "\x1b[36m";
const verde = "\x1b[32m";
const amarelo = "\x1b[33m";
const vermelho = "\x1b[31m";
const magenta = "\x1b[35m";

console.log();
let number1 = 0;
let number2 = 0;
let resultado = 0;
let opcao = 0;


let nome = prompt(`${negrito}${ciano}⦙ Digite seu nome:${reset} `);
console.clear();

const saudadcao = () => {
    
    console.log(`${roxo}    
╭──────────────────────────────
│${reset}${negrito} Olá, ${verde}${nome}${reset}!${roxo}                              
│${reset}${negrito} Seja bem-vindo à Calculadora!        ${roxo}
╰──────────────────────────────${reset}`);
    setTimeout(function() {
        
        console.clear();
        menu();

    }, 2000);
    
}

const adicao = () => {
    
    console.log();
    number1 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o primeiro número: ${reset}`));
    number2 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o segundo número: ${reset}`));
    
    if (!(isNaN(number1) || isNaN(number2))) {
        resultado = number1 + number2;
        return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} + ${number2} = ${resultado}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };
};

const subtracao = () => {

    console.log();
    number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o primeiro número: ${reset}`));
    number2 = Number(prompt(`${negrito}${ciano}⦙ Digite o segundo número: ${reset}`));

    if (typeof number1 === `number` && typeof number2 === `number`){
        resultado = number1 - number2;
        return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} - ${number2} = ${resultado}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };
};

const multiplicacao = () => {

    console.log();
    number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o primeiro número: ${reset}`));
    number2 = Number(prompt(`${negrito}${ciano}⦙ Digite o segundo número: ${reset}`));

    if (typeof number1 == `number` && typeof number2 == `number`){
    resultado = number1 * number2;
    return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} * ${number2} = ${resultado}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };
};

const divisao = () => {

    console.log();
    number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o primeiro número: ${reset}`));
    number2 = Number(prompt(`${negrito}${ciano}⦙ Digite o segundo número: ${reset}`));

    if (typeof number1 == `number` && typeof number2 == `number`){
        resultado = number1 / number2;
        return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} / ${number2} = ${resultado}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };   
};

const potenciacao = () => {

    console.log();
    number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que será a base da potenciação: ${reset}`));
    number2 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que será o expoente da potenciação: ${reset}`));

    if (typeof number1 == `number` && typeof number2 == `number`){
        resultado = Math.pow(number1, number2);
        return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} ^ ${number2} = ${resultado.toFixed(2)}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };   
};

const raiz_quadrada = () => {

    console.log();
    number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a raíz quadrada: ${reset}`))
    
    if (typeof number1 == `number`){
        resultado = Math.sqrt(number1);
        return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ √¯${number1} = ${resultado}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };   
};

const porcentagem = () => {
    
    console.log();
    number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a porcentagem: ${reset}`));
    number2 = Number(prompt(`${negrito}${ciano}⦙ Digite a porcentagem que deseja obter: ${reset}`));
    
    if (typeof number1 == `number`){
        resultado = (number1 * number2) / 100;
        return console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number2}% de ${number1} = ${resultado}${reset}`);
    } else {
        return console.log(`\n${negrito}${vermelho}⦙ Por favor, digite um número.${reset}`);
    };   
};

const menu = () => {
    do {
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

};

saudadcao(nome);

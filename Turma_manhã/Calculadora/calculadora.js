const prompt = require(`prompt-sync`)();

console.log();
let number1;
let number2;
let resultado;
let opcao;


let nome = prompt(`Digite seu nome: `)

const saudadcao = () => {
    
    console.log(`\n=================================\n= Olá ${nome}!\n= Seja bem-vindo a calculadora! =\n=================================\n`);
    setTimeout(function() {
        
        console.clear();
        menu();

    }, 2000);
    
}

const menu = () => {
    do {
    console.log(`
=======================================
=========== Menu de Opções ============
=======================================
= [1] - Soma                          =
= [2] - Subtração                     =
= [3] - Multiplicação                 =
= [4] - Divisão                       =
= [5] - Potenciação                   =
= [6] - Raiz Quadrada                 =
=                                     =
= [0] - Sair                          =
=======================================`);
    
    opcao = parseInt(prompt(`= Digite a opção desejada: `));
    console.clear();

    switch (opcao) {
        case 0:
            
            console.log(`= Obrigado por usar a calculadora!\n= Até a próxima ${nome}!`);
    
        break;
        
        case 1:
    
            number1 = Number(prompt(`= Digite o primeiro número: `));
            number2 = Number(prompt(`= Digite o segundo número: `));
            adicao();
        
        break;
    
        case 2:
    
            number1 = Number(prompt(`= Digite o primeiro número: `));
            number2 = Number(prompt(`= Digite o segundo número: `));
            subtracao();
        
        break;
    
        case 3:
        
            number1 = Number(prompt(`= Digite o primeiro número: `));
            number2 = Number(prompt(`= Digite o segundo número: `));
            multiplicacao();
        
        break;
    
        case 4:
    
            number1 = Number(prompt(`= Digite o primeiro número: `));
            number2 = Number(prompt(`= Digite o segundo número: `));
            divisao();
        
        break;
    
        case 5:
        
            potenciacao();
        
        break;
    
        case 6:
    
            number1 = Number(prompt(`Digite o número que deseja saber a raiz quadrada: `));
            raiz_quadrada();
        
        break;
    
        default:
    
            
    
        break;
    };
    

    } while (opcao != 0);

};

const adicao = () => {
    
    resultado = number1 + number2;
    return console.log(`= Resultado:\n= ${number1} + ${number2} = ${resultado}`);
};

const subtracao = () => {

    resultado = number1 - number2;
    return console.log(`= Resultado:\n= ${number1} - ${number2} = ${resultado}`);
};

const multiplicacao = () => {

    resultado = number1 * number2;
    return console.log(`= Resultado:\n= ${number1} * ${number2} = ${resultado}`);
};

const divisao = () => {

    resultado = number1 / number2;
    return console.log(`= Resultado:\n= ${number1} / ${number2} = ${resultado}`);};

const potenciacao = () => {

    number1 = Number(prompt(`= Digite o número que será a base da potenciação: `));
    number2 = Number(prompt(`= Digite o número que será o expoente da potenciação: `));
    resultado = Math.pow(number1, number2);
    return console.log(`= Resultado:\n= ${number1} elevado a ${number2} = ${resultado}`);
};

const raiz_quadrada = () => {

    number1 = Number(prompt(`= Digite o número que deseja obter a raíz quadrada: `))
    resultado = Math.sqrt(number1);
    return console.log(`= Resultado:\n ${number1}² = `)

};

saudadcao(nome);

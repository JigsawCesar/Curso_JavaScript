import PromptSync from "prompt-sync";

const prompt = PromptSync();
const vermelho = "\x1b[31m";
const reset = "\x1b[0m";
const ciano = "\x1b[36m";
const magenta = "\x1b[35m";
const negrito = "\x1b[1m";

const porcentagem = (number1, number2, resultado) => {
    console.log();
    
    while (true) {
        number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a porcentagem: ${reset}`));
        number2 = Number(prompt(`${negrito}${ciano}⦙ Digite a porcentagem que deseja obter: ${reset}`));
        console.clear();
        
        if (!(isNaN(number1) || isNaN(number2))) {
            resultado = (number1 * number2) / 100;
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number2}% de ${number1} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        } else {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        };
    };   
};

export default porcentagem;
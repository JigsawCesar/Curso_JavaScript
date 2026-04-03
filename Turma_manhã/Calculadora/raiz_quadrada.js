import PromptSync from "prompt-sync";

const prompt = PromptSync();
const vermelho = "\x1b[31m";
const reset = "\x1b[0m";
const ciano = "\x1b[36m";
const magenta = "\x1b[35m";
const negrito = "\x1b[1m";

const raiz_quadrada = (number1, resultado) => {
    console.log();
    
    while (true) {
        number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a raíz quadrada: ${reset}`));
        console.clear();
        
        if (!(isNaN(number1))) {
            resultado = Math.sqrt(number1);
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ √¯ ${number1} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        } else {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        };
    };   
};

export default raiz_quadrada;
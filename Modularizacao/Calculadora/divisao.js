import PromptSync from "prompt-sync";
import { negrito, vermelho, reset, ciano, magenta } from "./cores_terminal.js";

const prompt = PromptSync();

const divisao = () => {
    console.log();
    let number1, number2;

    while (true) {
        number1 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o número: ${reset}`));
        number2 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o número divisor: ${reset}`));
        console.clear();

        if (isNaN(number1) || isNaN(number2)) {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        } else if (number2 === 0) {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Erro: divisão por zero!${reset}\n`);
        } else {
            let resultado = number1 / number2;
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} / ${number2} = ${resultado.toFixed(2)}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        }   
    };
};

export default divisao;
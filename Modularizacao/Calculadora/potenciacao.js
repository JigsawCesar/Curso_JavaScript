import PromptSync from "prompt-sync";
import { negrito, vermelho, reset, ciano, magenta } from "./cores_terminal.js";

const prompt = PromptSync();

const potenciacao = (number1, number2, resultado) => {
    console.log();
    
    while (true) {
        number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que será a base da potenciação: ${reset}`));
        number2 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que será o expoente da potenciação: ${reset}`));
        console.clear();

        if (!(isNaN(number1) || isNaN(number2))) {
            resultado = Math.pow(number1, number2);
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} ^ ${number2} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        } else {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        };
    };   
};

export default potenciacao;
import PromptSync from "prompt-sync";
import { ciano, magenta, negrito, reset, vermelho } from "./cores_terminal.js";

const prompt = PromptSync();

const adicao = (number1, number2, resultado) => {
    
    console.log();

    while (true) { 
        number1 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o número: ${reset}`));
        number2 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o número a ser somado: ${reset}`));
        console.clear();
        
        if (!(isNaN(number1) || isNaN(number2))) {
            resultado = number1 + number2;
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number1} + ${number2} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        } else {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        }; 
    };

};

export default adicao;
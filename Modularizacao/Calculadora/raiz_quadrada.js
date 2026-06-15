import PromptSync from "prompt-sync";
import { negrito, vermelho, reset, ciano, magenta } from "./cores_terminal.js";

const prompt = PromptSync();

const raiz_quadrada = () => {
    console.log();
    let number1;
    
    while (true) {
        number1 = parseFloat(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a raíz quadrada: ${reset}`));
        console.clear();
        
        if (isNaN(number1)) {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        } else if (number1 < 0) {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Erro: não existe raiz quadrada de número negativo!${reset}\n`);
        } else {
            let resultado = Math.sqrt(number1);
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ √¯ ${number1} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        }
    };   
};

export default raiz_quadrada;
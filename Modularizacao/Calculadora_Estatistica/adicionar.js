import PromptSync from "prompt-sync";
import { negrito, ciano, magenta, verde, reset, vermelho } from "../Calculadora/cores_terminal.js";

const prompt = PromptSync();

const adicionar_numero = (lista, numero) =>{
    if (isNaN(numero)) {
        console.log(`${negrito}${vermelho}⦙ Entrada inválida! Por favor, digite um número.${reset}`);
        prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
        return;
    }
    lista.push(numero);
    console.log(`${negrito}${magenta}⦙ Número adicionado com sucesso!${reset}`);
    console.log(`${negrito}${magenta}⦙ Lista atual:${reset} ${lista.join(", ")}\n`);
    prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
};

export default adicionar_numero;

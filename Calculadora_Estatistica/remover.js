import { negrito, magenta, ciano, verde, reset } from "../Calculadora/cores_terminal.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const remover_numero = (lista) =>{
    lista.pop();
    console.log(`${negrito}${magenta}⦙ Número removido com sucesso!${reset}`);
    console.log(`${negrito}${magenta}⦙ Lista atual:${reset} ${lista.join(", ")}\n`);
    prompt(`${negrito}${ciano}⦙ Pressione ${verde}Enter${reset} ${ciano}para voltar ao menu ...${reset}`);
};

export default remover_numero;

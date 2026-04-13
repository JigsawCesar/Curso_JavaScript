import { negrito, vermelho, reset } from "../Calculadora/cores_terminal.js";

const calcular_media = (lista) =>{
    if (lista.length === 0) {
        console.log(`\n${negrito}${vermelho}⦙ A lista está vazia!${reset}\n`);
        return 0;
    } else {
        let soma = lista.reduce((acumulador, valor_atual) => acumulador + valor_atual, 0);
        return soma / lista.length;
    }
};

export default calcular_media;
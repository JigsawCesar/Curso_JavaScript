import { negrito, vermelho, reset } from "../Calculadora/cores_terminal.js";

const calcular_mediana = (lista) =>{
    
    let mediana = 0;
    
    if (lista.length === 0){
        console.log(`\n${negrito}${vermelho}⦙ A lista está vazia!${reset}\n`);
        return 0;
    };
    
    if(lista.length % 2 == 0){
        mediana = (lista[lista.length / 2] + lista[(lista.length / 2) - 1]) / 2
    } else {
        mediana = lista[Math.floor(lista.length / 2)]
    };

    return mediana;
};

export default calcular_mediana;

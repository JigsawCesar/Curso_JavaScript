import { ciano, reset, verde } from "../Cores/cores_terminal.js";

let lista = [ 5 , 9, 2, 14, 17 , 23 ];
let menor_valor = lista[0];

for (let i = 0; i < lista.length; i++) {

    if (menor_valor > lista[i]) {
        menor_valor = lista[i];
    };

};

console.clear();
console.log(`${ciano}⦙ O menor valor da lista é:${reset} ${verde}${menor_valor}${reset}`);

setTimeout(() => {    
    console.clear();
}, 3000);

import { ciano, verde, reset } from "../Cores/cores_terminal.js"

let lista = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
let contador = 0

for (let i = 0; i < lista.length; i++) {
    
    let valor = parseInt(lista[i]);
    valor = valor % 2
    
    if (valor !== 0) {
        contador = contador + 1;
    };

};

console.clear();
console.log(`${ciano}⦙ A quantidade de valores ímpares nesta lista é de:${reset} ${verde}${contador}${reset}`);

setTimeout(() => {    
    console.clear();
}, 3000);

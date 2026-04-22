import { reset, rosa, verde } from "../Cores/cores_terminal.js";

let lista = [ 10, 37, 52, 12, 9, 45 ];
let soma = 0;

for (let i = 0; i < lista.length; i++) {
    const resto = lista[i] % 2;

    if ( resto !== 0 ) {
        soma += lista[i];
    };
};

console.clear();
console.log(`${rosa}⦙ A soma dos números ímpares da lista é:${reset} ${verde}${soma}${reset}`);

setTimeout(() => {
    console.clear();
}, 3000);

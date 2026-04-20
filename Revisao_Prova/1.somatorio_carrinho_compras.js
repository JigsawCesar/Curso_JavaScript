import { ciano, verde, reset } from "../Cores/cores_terminal.js";

let carrinho = [ 10.50, 7.90, 5.00, 12.30, 3.20 ];
let media = 0;

for (let i = 0; i < carrinho.length; i++) {
    media += carrinho[i];
};

console.clear();
console.log(`${ciano}⦙ A média dos valores do carrinho é:${reset} ${verde}R$${media.toFixed(2)}${reset}`);

setTimeout(() => {    
    console.clear();
}, 3000);

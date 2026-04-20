const prompt = require(`prompt-sync`)();

let distancia = parseFloat(prompt(`Digite a distância percorrida (em km): `));
let risco = prompt(`A entrega é considerada de risco de risco ou urgente?(sim/nao): `).toLowerCase();
let frete = (distancia * 1.5) + 20;
let total = frete;

if (distancia > 100 || risco === `sim`) {
    total = frete + 15;
}

console.log(`O custo total do frete é: R$${total}`);
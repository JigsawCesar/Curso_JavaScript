const prompt = require(`prompt-sync`)();

let vHora = parseFloat(prompt(`Digite o valor da hora trabalhada: `));
let hExtra = parseFloat(prompt(`Digite a quantidade de horas extras trabalhadas no mês: `));
let total = vHora * 1.5 * hExtra;

console.log(`- O valor a receber de horas extras este mês é: R$${total}`);

const prompt = require(`prompt-sync`)();

let nome = prompt(`Digite seu nome: `);
let idade = parseInt(prompt(`Digite sua idade: `));

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
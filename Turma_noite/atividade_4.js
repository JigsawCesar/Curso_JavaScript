const prompt = require(`prompt-sync`)();

let ano_nascimento = parseInt(prompt(`Digite seu ano de nascimento: `));

let idade = 2026 - ano_nascimento;

console.log(`- Você tem ${idade} anos!`);

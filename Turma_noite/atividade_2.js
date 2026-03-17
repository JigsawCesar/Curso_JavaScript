const prompt = require(`prompt-sync`)();

let nome = prompt(`Digite seu nome: `);
let idade = parseInt(prompt(`Digite sua idade: `));
let cnh = prompt(`Você possui CNH? (sim/nao): `);

if (cnh.toLocaleLowerCase() === `sim`) {
    cnh = true;
    console.log(`- Você possui CNH.`);
} else {
    cnh = false;
    console.log(`- Você não possui CNH.`);
};

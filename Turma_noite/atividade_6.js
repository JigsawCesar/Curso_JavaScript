const prompt = require(`prompt-sync`)();

let resposta = prompt(`Você gosta de café? (sim/nao)`);

if (resposta.toLowerCase() === `sim`) {
    console.log(`- Que ótimo!`);
} else {
    console.log(`- Sinto muito!`);
};

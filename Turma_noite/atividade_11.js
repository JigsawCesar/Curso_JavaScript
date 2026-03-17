const prompt = require(`prompt-sync`)();

let numero = [];

console.log(`------ Vamos fazer o cálculo da média de suas 4 provas ------`);
for (let i = 0; i < 4; i++) {
    numero[i] = parseFloat(prompt(`Digite a nota da ${i + 1}ª prova: `));
}

let media = (numero[0] + numero[1] + numero[2] + numero[3]) / 4;

console.log(`\n- A média das suas 4 provas é: ${media.toFixed(2)}`);
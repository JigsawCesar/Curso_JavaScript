const prompt = require(`prompt-sync`)();

let hora = parseFloat(prompt(`Digite o número de horas estimadas para o projeto: `));
let ong = prompt(`Você é uma ONG? (sim/nao): `).toLowerCase();
let projeto = hora * 45;

if (projeto > 5000 && ong === `sim`) {
    let desconto = projeto - projeto * 0.1;
    console.log(`- ${desconto}.`);
} else {
    console.log(`- ${projeto}.`);
}
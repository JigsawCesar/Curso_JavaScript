const prompt = require(`prompt-sync`)();

let filaProjetos = [];
let projeto = {
    cliente: prompt(`Digite o nome da empresa: `),
    valorEstimado: parseFloat(prompt(`Digite o valor etimado em reais: `))
}

filaProjetos = projeto;
let prazo = prompt(`- O projeto possui prazo de entrega urgente? (sim/nao) `);

if (prazo == `sim` && projeto.valorEstimado > 3000) {
    projeto.valorEstimado = projeto.valorEstimado * 0.15 + projeto.valorEstimado
}

console.log(filaProjetos);
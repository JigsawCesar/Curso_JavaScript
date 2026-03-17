const prompt = require(`prompt-sync`)();

let atleta = {
    nome: `Felipe`,
    peso: 95,
    meta: `performance`,
    distancia: [40, 50, 60]
};

atleta.distancia.push(parseFloat(prompt(`Insira a distância corrida hoje : `)));

let media = atleta.distancia[1] + atleta.distancia[2] + atleta.distancia[3] / 3;

if (media > 20 && atleta.meta == `emagrecimento`) {
    atleta.peso = atleta.peso - 1;
    atleta.selo = `Meta Atingida`;
} 

else if (atleta.meta == `performance` && atleta.distancia[3] > atleta.distancia[2]) {
    atleta.selo = `Novo Recorde Pessoal`;
}

console.log(atleta);
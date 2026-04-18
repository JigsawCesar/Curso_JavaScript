const prompt = require(`prompt-sync`)();

let distancia = parseFloat(prompt(`Digite a distância percorrida (em km): `));
let consumo = parseFloat(prompt(`Digite a quantidade de combustível consumido (em litros): `));
let media = distancia / consumo;

if (media < 10) {
    console.log(`- Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.`);
} else {
    console.log(`- Consumo dentro do padrão operacional.`);
}
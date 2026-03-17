const prompt = require(`prompt-sync`)();

let estacao = {
    id: `Sensor-1`,
    local: `Laboratório`,
    temperaturas: []
};

estacao.temperaturas.push(parseFloat(prompt(`Digite a primeira leitura: `)));
estacao.temperaturas.push(parseFloat(prompt(`Digite a segunda leitura: `)));
estacao.temperaturas.push(parseFloat(prompt(`Digite a terceira leitura: `)));

let media = (estacao.temperaturas[0] + estacao.temperaturas[1] + estacao.temperaturas[2]) / 3;

if (media > 35) {
    estacao.alerta = true
    console.log(`- PERIGO: Média de temperatura extrema(${media} graus) detectada no ${estacao.local}!`);
} else {
    estacao.alerta = false
    console.log(`- Temperaturas dentro da normalidade.`);
}

console.log(estacao);
const prompt = require(`prompt-sync`)();

let salarios = [2500, 3200, 4100, 5000, 6200];

let horas = [11, 12, 13]

salarios.forEach((valor, indice) => {
    salarios[indice] = valor + (valor * 0.1);
});

console.log(salarios);
const prompt = require(`prompt-sync`)();

let salarios = [2500, 3200, 4100, 5000, 6200];

salarios.forEach((valor, indice) => {
    salarios[indice] = valor + (valor * 0.1);
});

console.log(salarios);
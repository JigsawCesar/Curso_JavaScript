const prompt = require(`prompt-sync`)();

let capacidadeMaxima = 0;
let caixa = 0;

while (capacidadeMaxima < 1000) {
    let carga = parseFloat(prompt(`Digite o peso da carga a ser armazenada (em kg): `));
    capacidadeMaxima += carga;
    if (capacidadeMaxima <= 1000) {
        caixa++;
    } else {
        console.log(`A capacidade máxima de 1000 kg foi excedida! Capacidade atual: ${capacidadeMaxima} kg`);

    }
}

console.log(`\n- O peso total é de ${capacidadeMaxima} kg.\n- E a quantidade de caixas armazenadas é de ${caixa}.`);

const prompt = require(`prompt-sync`)();

let estoqueTamanhos = [10, 15, 8];
let camisaP = parseInt(prompt(`Quantas camisetas do tamanho P foram vendidas hoje? `));
let alerta = estoqueTamanhos[0] - camisaP;

if (alerta < 5) {
    console.log(`- Alerta: Estoque de luvas tamanho P está crítico!`);
} else {
    estoqueTamanhos[0] = alerta
    console.log(`- Estoque atualizado. Quantidade restante do tamnho P: ${estoqueTamanhos[0]}`);
}
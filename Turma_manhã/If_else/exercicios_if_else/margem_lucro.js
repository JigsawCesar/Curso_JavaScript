const prompt = require(`prompt-sync`)();

let custo = parseFloat(prompt(`Digite o custo de produção do lote: `));
let venda = parseFloat(prompt(`Digite o valor de venda do lote: `));
let lucro = venda - custo;

if (lucro < 500 ) {
    console.log(`- Atenção: Margem de lucro perigosamente baixa!`);
} else {
    console.log(`- Margem de lucro saudável: R$ ${lucro}`);
}
const prompt = require(`prompt-sync`)();

let qtdAtual = parseFloat(prompt(`Digite a quantidade do produto em estoque: `));
let qtdMinima = parseFloat(prompt(`Digite a quantidade mínima do produto: `));

if (qtdAtual < qtdMinima) {
    let diferenca = qtdMinima - qtdAtual;
    console.log(`- Alerta: Estoque baixo! É necessário solicitar a compra de ${diferenca} unidades.`);
} else {
    console.log(`- Estoque regularizado.`);    
}
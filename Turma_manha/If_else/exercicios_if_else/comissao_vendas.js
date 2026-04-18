const prompt = require(`prompt-sync`)();

let venda = parseFloat(prompt(`Digite o valor total de vendas que realizou no mês: `));

if (venda >= 20000) {
    let comissao = venda * 0.05;
    console.log(`- O valor de sua comissão é de: R$${comissao}`);
} else {
    let comissao = venda * 0.02;
    console.log(`- O valor de sua comissão é de: R$${comissao}`);
}
const prompt = require('prompt-sync')();

let carrinho = {
    nome: ``,
    assinatura: `prime`,
    lista: []
};

carrinho.lista.push(parseFloat(prompt(`Digite o preço do primeiro produto: `)));
carrinho.lista.push(parseFloat(prompt(`Digite o preço do segundo produto: `)));
carrinho.lista.push(parseFloat(prompt(`Digite o preço do terceiro produto: `)));

let total = carrinho.lista[0] + carrinho.lista[1] + carrinho.lista[2];

if (total > 200 || carrinho.assinatura == `prime`) {
    carrinho.selo = true;
    console.log(`- Parabéns! Você ganhou frete grátis.`);
    console.log(`- O valor final a ser pago é: ${total}`);
} else {
    let taxa = total + 30;
    carrinho.selo = false;
    console.log(`- O valor final a ser pago é: ${taxa}`);
    console.log(carrinho);
};
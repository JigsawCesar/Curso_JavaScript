const prompt = require(`prompt-sync`)();

let pedido = {
    nome: `Felipe`,
    valor: 30.00,
    quantidade: 4,
    ingredientes: []
};

pedido.ingredientes.push(ingrediente1 = {
    nome: prompt(`Digite o ingrediente extra que deseja adicionar ao seu pedido: `),
    valorextra: parseFloat(prompt(`Digite o valor do ingrediente extra: `))
});

pedido.ingredientes.push(ingrediente2 = {
    nome: prompt(`Digite o ingrediente extra que deseja adicionar ao seu pedido: `),
    valorextra: parseFloat(prompt(`Digite o valor do ingrediente extra: `))
});

total = (pedido.valor + pedido.ingredientes[0].valorextra + pedido.ingredientes[1].valorextra) * pedido.quantidade;

if (pedido.ingredientes.length == 2 && pedido.quantidade > 2) {
    subtotal = total - (total * 0.20);
    console.log(`\n- Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`- Total: R$ ${total.toFixed(2)}`);
    console.log(`- Lista de ingredientes adicionais: ${pedido.ingredientes[0].nome}, ${pedido.ingredientes[1].nome}`);
};
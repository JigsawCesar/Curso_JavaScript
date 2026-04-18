const prompt = require(`prompt-sync`)();

let pedido = {
    nome: `Felipe` 
}
console.log(`============================\n------- Olá ${pedido.nome}! --------\nSeja bem-vindo a nossa loja!`);

function menu() {

    console.log(`============================
----- Menu de seleção ------
============================
| [1] - 🎧 Fone            |
| [2] - ⌨️ Teclado          |
| [3] - 🖱️ Mouse            |
============================`);
}


function escolha() {

    let opcao = parseInt(prompt(` Digite a opção desejada: `))

    switch (opcao) {
        case 1:
            
            pedido.produto = `Fone`;
            pedido.preco = 100;

            break;

        case 2:
            
            pedido.produto = `Teclado`;
            pedido.preco = 200;

            break;
        
        case 3:
            
            pedido.produto = `Mouse`;
            pedido.preco = 50;

            break;

        default:

            pedido.produto = `Desconhecido`;
            pedido.preco = 0;

            break;
    };
};



function resultado() {

console.clear();
console.log(`============================
Produto: ${pedido.produto}
Valor:   R$ ${pedido.preco.toFixed(2)}
============================`);

};

menu();
escolha();
resultado(pedido.produto, pedido.preco);
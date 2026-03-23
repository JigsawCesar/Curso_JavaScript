const prompt = require('prompt-sync')();

let continuar;
let valorTotal = 0;
let itemEscolhido = [];
let cardapio = [
    { nome: "Lanche", preco: parseFloat(15.00) },
    { nome: "Refrigerante", preco: parseFloat(5.00) },
    { nome: "Batata Frita", preco: parseFloat(10.00) },
    { nome: "Sorvete", preco: parseFloat(8.00) }
];

do {
    console.log(`\n----------- Cardápio -------------\n==================================
| [1] - 🍔 Lanche       - R$${cardapio[0].preco.toFixed(2)} |
| [2] - 🥤 Refrigerante - R$${cardapio[1].preco.toFixed(2)}  |
| [3] - 🍟 Batata Frita - R$${cardapio[2].preco.toFixed(2)} |
| [4] - 🍧 Sorvete      - R$${cardapio[3].preco.toFixed(2)}  |
==================================`);
    
    continuar = prompt(`Deseja adicionar mais algum item? (sim/nao) `).toLowerCase();
    if (continuar === "sim") {
        
        let escolha = parseInt(prompt(`Digite o número do item desejado: `));
        
        switch (escolha) {
            case 1:

                valorTotal += cardapio[0].preco;
                itemEscolhido.push(cardapio[0].nome);
                break;
                
            case 2:

                valorTotal += cardapio[1].preco;
                itemEscolhido.push(cardapio[1].nome);
                break;
            
            case 3:

                valorTotal += cardapio[2].preco;
                itemEscolhido.push(cardapio[2].nome);
                break;

            case 4:

                valorTotal += cardapio[3].preco;
                itemEscolhido.push(cardapio[3].nome);
                break;

            default:

                console.log(`\n😅 Opção inválida, tente novamente!\n`);
                break;
        }
        
    }

} while (continuar === "sim");

console.log(`\n------ Pedido finalizado! ------
Itens escolhidos: ${itemEscolhido.join(", ")}
O valor total a ser pago: R$${valorTotal.toFixed(2)}`);

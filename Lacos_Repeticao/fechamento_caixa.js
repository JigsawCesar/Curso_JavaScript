const prompt = require(`prompt-sync`)();

const carrinhos = [
 { cliente: "João", produtos: [50.0, 120.5, 15.0] },
 { cliente: "Maria", produtos: [200.0, 45.9] },
 { cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] }
];

carrinhos.forEach((item) => {
    resultado = 0

    item.produtos.forEach((preco) =>{
        resultado = resultado + preco
    })

    console.log(`=======================================\nCliente: ${item.cliente} - Total gasto: R$${resultado.toFixed(2)}`);
})
const prompt = require(`prompt-sync`)();

let lista = [];

for (let i = 0; i < 5; i++) {
    let item = prompt(`Digite o ${i + 1}º item da sua lista de compras: `);
    lista.push(item);
}
console.log(`\nOs itens da sua lista de compras são: 
    - ${lista.join('\n    - ')}`);
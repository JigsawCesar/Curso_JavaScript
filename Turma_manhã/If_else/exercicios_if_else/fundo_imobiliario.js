const prompt = require(`prompt-sync`)();

let cota = parseFloat(prompt(`Digite o valor de cotas que você possui: `));
let rendimento = parseFloat(prompt(`Digite o valor do rendimento pago por cada cota este mês: `));
let total = cota * rendimento;

if (total >= 100) {
    console.log(`- Você já tem saldo suficiente para comprar uma nova cota e reinvestir!`);
} else {
    console.log(`- Rendimento recebido: R$ ${total}. Acumule mais para reinvestir.`);
}
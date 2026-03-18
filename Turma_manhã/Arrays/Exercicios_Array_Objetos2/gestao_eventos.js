const prompt = require(`prompt-sync`)()

let grupo = {
    nome: `Lions`,
    orcamentoTotal: parseFloat(500),
    openBarFechado: false,
    consumoExtras: []
};

let bebidas = {
    nome1: (prompt(`Digite o nome da primeira bebida: `)),
    nome2: (prompt(`Digite o nome da segunda bebida: `)),
    valorTotal: (parseFloat(prompt(`Digite o valor total delas: `)))
}; 

grupo.consumoExtras.push(bebidas.nome1, bebidas.nome2);

let subtotal = grupo.orcamentoTotal - bebidas.valorTotal
let total = 0;

if (subtotal < 0) {

    grupo.openBarFechado = true;
    grupo.multa = parseFloat(500);
    subtotal = subtotal * -1;
    console.log(`\n- O valor total ultrapassou o orçamento em R$${subtotal.toFixed(2)}`);
    grupo.orcamentoTotal = 0;
    let diferenca = subtotal * -1;
    total = grupo.multa + diferenca;
   
} else {
    grupo.orcamentoTotal = subtotal;
}

console.log(`\n--- Fechamento financeiro ---\n\nEmpresa: ${grupo.nome}\nOrçamento Total: R$${grupo.orcamentoTotal.toFixed(2)}
Consumos Extras:\n- ${grupo.consumoExtras}\n\nTotal a pagar:R$${total.toFixed(2)}`);
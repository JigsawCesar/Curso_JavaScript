const prompt = require(`prompt-sync`)();

const registrarVenda = (saldo, venda) => {

    return saldo + venda

};

const registrarDespesa = (saldo, despesa) => {

    return saldo - despesa

};

let venda = 0;
let opcao = ``;
let resultado = 0;
let caixa = {
    operador: ``,
    saldo: 100,
    historico: []
};

while (opcao != `S`) {

    console.log(`Qual operação deseja realizar?\n[V] - Venda\n[D] - Despesa\n[S] - Sair`);
    opcao = prompt();

    switch (opcao) {
        case`V`:
            
            venda = parseFloat(prompt(`Qual foi o valor da venda:`));
            caixa.saldo = registrarVenda(caixa.saldo, venda);
            caixa.historico.push(`Entrada`);

        break;

        case `D`:

            despesa = parseFloat(prompt(`Qual foi o valor da despesa:`));
            caixa.saldo = registrarDespesa(caixa.saldo, despesa);
            caixa.historico.push(`Saída`);


        break;

        case `D`:

            console.log(`Programa fechando ...`);

        break;

        default:

            console.log(`Opção inválida, tente novamente!`);

        break;
    };
};

console.table(caixa);
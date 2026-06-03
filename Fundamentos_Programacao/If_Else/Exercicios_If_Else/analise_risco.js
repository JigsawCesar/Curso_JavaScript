const prompt = require(`prompt-sync`)();

let salario = parseFloat(prompt(`Digite o valor do salário líquido: `));
let parcela = parseFloat(prompt(`Digite o valor da parcela desejada: `));
let restricao = prompt(`O cliente tem restrição no nome? (sim/nao): `).toLowerCase();

if (parcela <= salario * 0.3 && restricao === `nao`) {
    console.log(`- Crédito aprovado!`);
} else {
    console.log(`- Crédito Negado: Parcela acima do limite ou restrição no CPF.`);    
}
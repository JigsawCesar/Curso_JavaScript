const prompt = require(`prompt-sync`)();

let condominio = parseFloat(prompt(`Digite o valor do condomínio: `));
let atraso = parseInt(prompt(`Qual a quantidade de dias de atraso: `));
let feriado = prompt(`O vencimento caiu em um feriado ou final de semana? (sim/nao): `).toLowerCase();

if (atraso > 0 && feriado === `nao`) {
    let multa = condominio + condominio * 0.02 + atraso;
    console.log(`Seu boleto tem o valor de: R$${multa}`);    
} else {
    console.log(`Seu boleto tem o valor de: R$${condominio}`);    
}
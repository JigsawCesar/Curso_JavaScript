const prompt = require(`prompt-sync`)();

let usuario = {
    nome: prompt(`Digite seu nome: `),
    idade: parseInt(prompt(`Digite sua idade: `)),
    cnh: prompt(`Você possui CNH? (sim/nao): `)
}
if(usuario.cnh.toLowerCase() === `sim`) {
    console.log(`Olá ${usuario.nome}! Você tem ${usuario.idade} anos e possui CNH.`);
} else{
    console.log(`Olá ${usuario.nome}! Você tem ${usuario.idade} anos e não possui CNH.`);
};

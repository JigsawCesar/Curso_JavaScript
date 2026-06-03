const prompt = require(`prompt-sync`)();

let passageiro = {
    nome: `Maria`,
    nacionalidade: `parisiense`,
    trabalhando: true,
    documentos: [`passaporte`, `visto`],
};

passageiro.documentos.push(prompt(`Insira qual o terceiro documento apresentado: `));

if (passageiro.nacionalidade.toLowerCase() === `brasileiro`){
    if (passageiro.documentos[0] === `passaporte`) {
        passageiro.entrada_permitida = true;
        console.log(`- Entrada permitida!`);  
}} else if(passageiro.documentos[1] == `visto` && passageiro.documentos[2] != ``) {
    passageiro.entrada_permitida = true;
    console.log(`- Entrada permitida!`);
} else {
    passageiro.entrada_permitida = false;
    console.log(`- Entrada não permitida!`);
}

console.log(passageiro);

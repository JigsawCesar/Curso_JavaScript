const prompt = require(`prompt-sync`)();

let turma = [];

for (let i = 0; i < 3; i++) {

let aluno = {
    nome: prompt(`Digite o nome do ${i + 1}º aluno: `),
    idade: parseInt(prompt(`Digite a idade do aluno: `)),
    curso: prompt(`Digite o curso do aluno: `)
};
console.log(``);

turma.push(aluno);
};

console.log(`A turma está composta por:\n`);

for (let i = 0; i < turma.length; i++) {
    console.log(`- Nome: ${turma[i].nome}`);
    console.log(`- Idade: ${turma[i].idade}`);
    console.log(`- Curso: ${turma[i].curso}`);
    console.log(``);
};
const prompt = require(`prompt-sync`)();

let listaAlunos = ['Felipe', 'Lucas']
listaAlunos.push(prompt(`Digite o nome do novo aluno: `));

if (listaAlunos.length == 3) {
    console.log(`- Turma formada com sucesso! Alunos: ${listaAlunos}`);
}
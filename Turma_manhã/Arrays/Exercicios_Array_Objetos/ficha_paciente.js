const prompt = require(`prompt-sync`)();

let paciente = {};
paciente.nome = prompt(`Digite o nome do animal: `);
paciente.raca = prompt(`Digite a sua raça: `);
paciente.idade = parseInt(prompt(`Digite a idade: `));

if (paciente.idade >= 8) {
    console.log(`- O paciente ${paciente.nome} já é sênior e precisa de exames de rotina.`);
} else {
    console.log(`- Paciente na faixa de idade regular.`);
}

console.log(paciente);
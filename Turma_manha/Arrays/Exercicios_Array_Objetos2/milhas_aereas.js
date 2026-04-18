const prompt = require(`prompt-sync`)();

let cliente = {
    nome: `Felipe`,
    historico: [voo1 = {
        destino: `Berlim`,
        quantidade: 1000
    }, voo2 = {
        destino: `Paris`,
        quantidade: 500
    }]
};

cliente.historico.push(voo3 = {
    destino: prompt(`Digite o destino do seu próximo voo: `),
    quantidade: parseFloat(prompt(`Digite a quantidade de milhas do seu próximo voo: `))
});

let soma = cliente.historico[0].quantidade + cliente.historico[1].quantidade + cliente.historico[2].quantidade;

if (soma > 5000) {
    soma -= 5000;
    cliente.categoria = `Platinum`;
    console.log(`- Parabéns! Agora você é um cliente Platinum.`);
} else {
    cliente.categoria = `Gold`;
    console.log(`- Faltam apenas ${5000 - soma} milhas para atingir a categoria Platinum.`);
}

console.log(cliente);

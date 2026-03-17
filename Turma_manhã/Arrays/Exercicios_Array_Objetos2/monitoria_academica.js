const prompt = require(`prompt-sync`)();

let projeto = {
    nome_cordenador: `Felipe`,
    limite_vagas: 5,
    area_estudo: `Programacao`,
    mentores: [ mentor1 = {
        nome: `Ingrid`,
        area_atuacao: `Front-end`
    }, mentor2 = {
        nome: `Gustavo`,
        area_atuacao: `Back-end`
    }]
};

if (projeto.mentores.length < projeto.limite_vagas && projeto.area_estudo == `Programacao`) {

    projeto.mentores.push(mentor3 = {
        nome: prompt(`Digite o nome do mentor: `),
        area_atuacao: prompt(`Digite a área de atuação: `)
    });
    console.log(projeto);
    
} else {
    projeto.status = `Bloqueado para Inscrições.`;
    console.log(projeto);
    
}
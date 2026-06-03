const prompt = require(`prompt-sync`)();

let aluno = {
    nome: `Felipe`,
    pontosLeitura: 10,
    historicoDias: [
        registro1 = {
            data: `01-06`,
            paginasLidas: 35 
    }
        , registro2 = {
            data: `02-06`,
            paginasLidas: 20
    }]
};

let registro3 = {
    data: prompt(`Digite a data de hoje: `),
    paginasLidas: parseInt(prompt(`Digite a quantidade de páginas lidas: `))
};

aluno.historicoDias.push(registro3);

if (aluno.historicoDias[2].paginasLidas > 50 && aluno.pontosLeitura > 0) {
    
    aluno.pontosLeitura = aluno.pontosLeitura * 2;
    aluno.historicoDias[2].data += ` - Super leitor!`;

} else if (aluno.historicoDias[2].paginasLidas > 10) {
    
    aluno.pontosLeitura = aluno.pontosLeitura / 2;
    
}

console.log(`\n----------------------\n- Olá ${aluno.nome}!\n- Sua pontuação atual é de: ${aluno.pontosLeitura}
- Histórico de dias lidos: ${aluno.historicoDias[0].data}, ${aluno.historicoDias[1].data}, ${aluno.historicoDias[2].data}`);


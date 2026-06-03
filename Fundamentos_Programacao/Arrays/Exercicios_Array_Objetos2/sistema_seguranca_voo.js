const prompt = require(`prompt-sync`)();

let turbina = {
        lado: `Motor esquerdo`,
        status: `Desligada`,
        sensores: [leitura_critica = {
            temperatura: 40,
            pressao: 60,
            combustivel: 90
    }]
};

console.log(`Atualizando os valores do sensor:\n`);

turbina.sensores[0].temperatura = prompt(`- Insira a temperatura atual (°C): `);
turbina.sensores[0].pressao = prompt(`- Insira a pressão atual (psi): `);
turbina.sensores[0].combustivel = prompt(`- Insira o nível de combustível atual (%): `);

if (turbina.sensores[0].combustivel > 20 && turbina.sensores[0].pressao > 50 && 
    (turbina.sensores[0].temperatura >= 20 && turbina.sensores[0].temperatura<= 90)) {
    turbina.status = `Ligada`;
    console.log(`- A turbina do ${turbina.lado} está ${turbina.status}.`);
} else {
    turbina.status = `Falha crítica`;
    turbina.bloqueioAtivado = true;
    console.log(`Falha crítica!`);
}

console.log(turbina);

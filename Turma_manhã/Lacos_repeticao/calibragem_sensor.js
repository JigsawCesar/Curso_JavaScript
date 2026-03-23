const prompt = require(`prompt-sync`)();

let temperaturaInicial = [];

const calibragem_temperatura = (temperaturaInicial) => {

    for (let i = 0; i < 5; i++){

        temperaturaInicial[i] = parseFloat(prompt(`Digite a temperatura: `));
        temperaturaInicial[i] = temperaturaInicial[i] + 2;
        console.log(`- Temperatura calibrada do sensor ${i + 1}: ${temperaturaInicial[i]}°C\n`);
    };

};

calibragem_temperatura(temperaturaInicial);
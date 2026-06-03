const prompt = require(`prompt-sync`)();

let temperatura = [];

console.log(`
============================================
======= 🌡️ Insira as temperaturas 🌡️ =========
============================================\n`);


for (let i = 0; i < 3; i++) {
    
    let valor_digitado = parseFloat(prompt(`- Digite a ${i + 1}ª temperatura: `));
    temperatura.push(valor_digitado);

};

const avaliarTemperaturas = (valor) => {
    const media = (valor[0] + valor[1] + valor[2]) / valor.length;
    
    if (media >= 30 ) {
        
        console.log(`\n============================================\n======== ⚠️ Alerta de Aquecimento! ⚠️ ========\n============================================`);

    } else {
        
        console.log(`\n============================================\n=========== ✨ Clima Estável! ✨ ===========\n============================================ `)

    }
    
    return media;
}

const resultado = avaliarTemperaturas(temperatura);
console.log(`- A média das ${temperatura.length} temperaturas é: ${resultado.toFixed(2)}°C
============================================`);

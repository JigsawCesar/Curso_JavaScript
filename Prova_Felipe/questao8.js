let palavra = "aranha";
let letra_encontrada = [];
let contagem = [];

for (let i = 0; i < palavra.length; i++) {
    
    let letra_atual = palavra[i];
    let indice = letra_encontrada.indexOf(letra_encontrada);


    if (indice != -1) {
        contagem[indice]++;
    } else {
        letra_encontrada.push(letra_atual);
        contagem.push(1)
    };

};

console.clear();
console.log(`⦙ Relatorio de frequência:`);

for (let i = 0; i < letra_encontrada.length; i++) {
    console.log(`⦙ ${letra_encontrada[i]}: ${contagem[i]}`);  
};
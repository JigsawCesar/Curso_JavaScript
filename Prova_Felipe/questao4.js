let frase = "Ola Mundo";
let vogais = [ "a", "e", "i", "o", "u" ];
let contador = 0;
let caractere = ""

for (let i = 0; i < frase.length; i++) {

    caractere = frase[i].toLowerCase();

    if (vogais.includes(caractere) && caractere != " "){
        contador += 1;
    };

};

console.clear();
console.log(`⦙ A frase tem um total de ${contador} vogais!\n`);
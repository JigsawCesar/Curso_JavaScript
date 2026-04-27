let palavra = "Wendel";
let palavra_inversa = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    const letra = palavra[i].toLowerCase();
    
    palavra_inversa += letra 
    
};

console.clear();
if (palavra.toLowerCase() === palavra_inversa.toLowerCase()) {
    console.log(`⦙ A palavra ${palavra} é um Palíndromo!\n`);
} else {
    console.log(`⦙ A palavra ${palavra} não é um Palíndromo!\n`);
};

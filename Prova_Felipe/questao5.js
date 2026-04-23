let palavra = "Felipe";
let palavra_inversa = ""

for (let i = 5; i >= 0; i--) {
    const letra = palavra[i].toLowerCase();
    
    palavra_inversa += letra 
    
};

console.clear();
console.log(`⦙ A palavra inversa é: ${palavra_inversa}\n`);
let lista = [ 2, 6, 9, 7, 3 ];
let soma = 0;
let media = 0;

for (let i = 0; i < lista.length; i++) {
    
    soma += lista[i];
    media = soma / lista.length;

};

console.log(`⦙ O resultado é: ${media}`);
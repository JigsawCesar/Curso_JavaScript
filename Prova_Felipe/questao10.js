let lista = [ 5, 2, 6, 9, 7, 3 ];
let maior_numero = lista[0];
let menor_numero = lista[0];
let diferenca = 0

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];

    if (numero > maior_numero) {
        maior_numero = numero
    };
    
    if (numero < menor_numero){
        menor_numero = numero 
    };

};

diferenca = maior_numero - menor_numero

console.clear();
console.log(`⦙ Menor número da lista: ${menor_numero}\n⦙ Maior número da lista é: ${maior_numero}\n`);
console.log(`⦙ Diferença entre eles: ${maior_numero} - ${menor_numero} = ${diferenca}\n`);
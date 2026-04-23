let lista = [ 5 , 9, 2, 14, 17 , 23, 45 ];
let maior_valor = lista[0];

for (let i = 0; i < lista.length; i++) {

    if (maior_valor < lista[i]) {
        maior_valor = lista[i];
    };

};

console.clear();
console.log(`⦙ O maior valor da lista é: ${maior_valor}`);
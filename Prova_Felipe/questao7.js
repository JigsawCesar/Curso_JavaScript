let lista = [3, 1, 1, 2, 8, 41, 3, 12, 9];
let nova_lista = [];
let numeros_repetido = [];

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];

    if (nova_lista.includes(numero) == true ) {
        numeros_repetido.push(numero)
    } else{
        nova_lista.push(numero);
    };

};

console.clear();
console.log(`⦙ Os números repetidos são: ${numeros_repetido}\n`);

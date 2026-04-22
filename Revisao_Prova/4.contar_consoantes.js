import promptSync from 'prompt-sync';
import { ciano, reset, verde, roxo, rosa } from '../Cores/cores_terminal.js';
const prompt = promptSync();

let frase = "";
let vogais = [ "a", "e", "i", "o", "u" ];
let contador = 0;

console.clear();
console.log(`${roxo}    
╭────────────────────────────────────╮                              
│${reset}       Contagem de Consoantes${roxo}       │
╰────────────────────────────────────╯${reset}`);
frase = prompt(`${ciano}⦙ Digite a frase que deseja fazer a contagem de consoantes:${reset} `);

for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i].toLowerCase();

    if (!vogais.includes(frase[i]) && frase[i].match(/[a-z]/i)){
        contador += 1;
    };

};

console.log(`${rosa}⦙ Sua frase tem um total de${reset} ${verde}${contador}${reset} ${rosa}consoantes!${reset}`);

setTimeout(() => {    
    console.clear();
}, 3000);

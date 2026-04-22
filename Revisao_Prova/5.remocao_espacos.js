import promptSync from 'prompt-sync';
import { ciano, reset, verde, roxo, rosa } from '../Cores/cores_terminal.js';
const prompt = promptSync();

let frase = "";
let resultado = "";

console.clear();
console.log(`${roxo}    
╭────────────────────────────────────╮                              
│${reset}         Remoção de Espaços${roxo}         │
╰────────────────────────────────────╯${reset}`);
frase = prompt(`${ciano}⦙ Digite a frase que deseja fazer a remoção dos espaços:${reset} `);

for (let i = 0; i < frase.length; i++) {

    if (frase[i] !== " ") {
        resultado += frase[i];
    };
    
};

console.log(`${rosa}⦙ Aqui está a frase que você digitou sem os espaços:${reset}`);
console.log(`${verde}⦙ ${resultado}${reset}`);

setTimeout(() => {    
    console.clear();
}, 3000);

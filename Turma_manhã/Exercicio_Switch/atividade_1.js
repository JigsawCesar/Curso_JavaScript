const prompt = require(`prompt-sync`)();

console.log(`----- Menu de Seleção ------\n| [1] - 👊 Ação            |\n| [2] - 🤣 Comédia         |
| [3] - 👻 Terror          |\n| [4] - 🤖 Animação        |\n---------------------------`);
let genero = parseInt(prompt(`Digite o número do menu correspondente: `));

switch (genero) {
    case 1:
        
        console.log(`O filme passará na Sala 1`);
        break;
    case 2:
        
        console.log(`O filme passará na Sala 2`);
        break;
    
    case 3:
        
        console.log(`O filme passará na Sala 3`);
        break;
    
    case 4:

        console.log(`O filme passará na Sala 4`);
        break;
    
    default:
        do {
            
        } while (condition);
        console.log(`----- Menu de Seleção ------\n| [1] - 👊 Ação            |\n| [2] - 🤣 Comédia         |
        | [3] - 👻 Terror          |\n| [4] - 🤖 Animação        |\n---------------------------`);
        genero = parseInt(prompt(`Digite o número do menu correspondente: `));
        
        break;
}
const prompt = require(`prompt-sync`)();

let menu;
do {
console.log(`----- Menu de Seleção -----\n| [1] - 👊 Ação            |\n| [2] - 🤣 Comédia         |
| [3] - 👻 Terror          |\n| [4] - 🤖 Animação        |\n|                         |
| [0] - ❌ Sair           |\n---------------------------`);
menu = parseInt(prompt(`Digite o número correspondente ao gênero desejado: `));

    switch (menu) {
        case 1:
        
            console.log(`- O filme passará na Sala 1`);
        break;

        case 2:
        
            console.log(`- O filme passará na Sala 2`);
        break;
    
        case 3:
        
            console.log(`- O filme passará na Sala 3`);
        break;
    
        case 4:

            console.log(`- O filme passará na Sala 4`);
        break;

        case 0:
            
            console.log(`Encerrando o menu...`);
        break;

        default:
            console.log(`\n😅 Opção inválida, tente novamente!`);
        
        break;
    }

} while (menu != 0 && menu != 1 && menu != 2 && menu != 3 && menu != 4);
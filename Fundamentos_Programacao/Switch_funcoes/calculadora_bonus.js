const prompt = require(`prompt-sync`)();

let opcao;
let salario;
let bonus;
let total;

console.log(`\n---- Consulta de Bônus por cargo ----\n\n ===============================
| [1] - Estagiário              |
| [2] - Júnior                  |
| [3] - Pleno                   |
 ===============================\n`);

opcao = parseInt(prompt(`Digite a opção correspondente ao seu cargo: `));
salario = parseFloat(prompt(`Digite o salário atual: `));

const funcionario = () => {
    do {
    
        switch (opcao) {
            
            case 1:
                bonus = salario * 0.1;
                total = salario + bonus;
            break;
            
            case 2:
                bonus = salario * 0.15;
                total = salario + bonus;
            break;

            case 3:
                bonus = salario * 0.2;
                total = salario + bonus;
            break;
            
            default:
                console.log(`\n😅 Opção inválida, tente novamente!\n`);
            break;
        };

    return salario;

    } while (opcao == 1 || opcao == 2 || opcao == 3);    

};

funcionario();

console.log(`\n===============================
- Salário atual:  R$ ${salario.toFixed(2)}
- Bônus do cargo: R$ ${bonus.toFixed(2)}
===============================
- Total:          R$ ${total.toFixed(2)}
===============================`);

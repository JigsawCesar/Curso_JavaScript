const prompt = require(`prompt-sync`)();

let soma = 0;
let pontos = [];
console.log(`
=================================
-- Cálculo de Média dos Pontos --
=================================
`);
for (let i = 0; i < 3; i++) {
    
    let input;
    input = parseInt(prompt(`Digite a sua ${i + 1}ª pontuação: `));
    pontos.push(input);

}

const somar_valores = (pontuacao) =>{
    
    soma = pontuacao[0] + pontuacao[1] + pontuacao[2];

    if (soma >200 || pontuacao[2] > 90) {
        console.log(`
=================================
----- 👑 Você é veterano 👑 -----
-------- 🏆 Parabéns 🏆 ---------
=================================`);
    } else {
        console.log(`
=================================
----- 👶 Você é iniciante 👶 ----
------ 💪 Pratique mais 💪 ------
=================================`);
    }
}

somar_valores(pontos)





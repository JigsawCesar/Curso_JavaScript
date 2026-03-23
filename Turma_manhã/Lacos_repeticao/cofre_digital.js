const prompt = require(`prompt-sync`)();

let senha = 2404;
let senhaDigitada = 0;

const validador_senha = (senhaDigitada) => {

    do {
        senhaDigitada = parseInt(prompt(`Digite a senha de acesso ao cofre: `));
    
        if (senhaDigitada != senha) {
            console.log(`- Acesso negado: Senha incorreta!\n\nDigite a senha novamente:`);    
        }
    

    } while(senhaDigitada != senha);

    console.log(`\n=============================\n- Cofre liberado com sucesso!\n=============================`);
};

validador_senha(senhaDigitada);
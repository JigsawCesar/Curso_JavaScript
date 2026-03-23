const prompt = require(`prompt-sync`)();

let senha = 2404;
let senhaDigitada = 0;

const validador_senha = (senhaDigitada) => {

    do {
        senhaDigitada = parseInt(prompt(`Digite a senha de acesso: `));
    
        if (senhaDigitada != senha) {
            console.log(`\n- Acesso negado: Senha incorreta!\n\n========= Tente novamente =========`);    
        }
    

    } while(senhaDigitada != senha);

    console.log(`\n=============================\n- Cofre liberado com sucesso!\n=============================`);
};

validador_senha(senhaDigitada);
const prompt = require(`prompt-sync`)();

const validar_acesso = (nome, id) => nome.length > 5 && id > 1000;
let acesso;

while (acesso != true) {

    console.log(`------ Sistema de validação de credenciais ------\n`);
    
    let nome = prompt(`Digite seu nome: `);
    let id = parseInt(prompt(`Digite o código do seu crachá: `));

    if (validar_acesso(nome, id)) {
        
        console.log(`\n- Acesso Concedido! Seja bem-vindo ${nome}.\n`);
        acesso = true;
    
    } else {
        
        console.log(`\n- Acesso Negado! Tente novamente.
- Dica: O nome deve conter mais de 5 caracteres e o código do crachá deve ser maior que 1000.\n`);
        acesso = false;
    };
};
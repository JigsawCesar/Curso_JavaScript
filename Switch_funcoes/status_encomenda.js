const prompt = require(`prompt-sync`)();

let encomenda = {
    id: 1808,
    status: prompt(`Digite o status do código atual: `).toUpperCase()
}
let status;

const atualizar_status = (opcao) =>{
    switch (status) {

    case `P`:
        
        console.log(`- 📦 Pendente de envio`);
        
    break;

    case `E`:
        
       console.log(`- 🚚 Em rota de entrega`) 

    break;
    
    case `C`:
        
        console.log(`- ❌ Cancelado`);

    break;

    default:

        console.log(`\n- 😅 Status inválido!`);
        
    break;
    };
};

console.log(`
=======================================
-------- Atualização de Status --------
=======================================
| Opções:                             |
|                                     |
| [P] - 📦 Pendente de envio         |
| [E] - 🚚 Em rota de entrega        |
| [C] - ❌ Cancelado                 |
|                                     |
=======================================`);



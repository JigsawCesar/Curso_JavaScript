import { ciano, vermelho, negrito, reset } from "../../Calculadora/cores_terminal.js";

const listar_contato = (contatos) => {
    
    if (contatos.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum contato cadastrado.${reset}`);
        return
    };

    contatos.forEach(contato => {
        console.log(`\n${negrito}${ciano}\n⦙ ID:${reset} ${contato.id}`);
        console.log(`${negrito}${ciano}\n⦙ Nome:${reset} ${contato.nome}`);
        console.log(`${negrito}${ciano}\n⦙ Email:${reset} ${contato.email}`);
        console.log(`${negrito}${ciano}\n⦙ Telefones:${reset} ${contato.telefones.join(" | ")}`);
    });
};

export default listar_contato;
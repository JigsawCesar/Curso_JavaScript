import { vermelho, negrito, reset } from "../Calculadora/cores_terminal.js";

const listar_contato = (contatos) => {
    
    if (contatos.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum contato cadastrado.${reset}`)
        return
    };

    contatos.forEach(contato => {
        console.log(`\nID: ${contato.id}`)
        console.log(`Nome: ${contato.nome}`)
        console.log(`Email: ${contato.email}`)
        console.log(`Telefones: ${contato.telefones.join(" | ")}`)
    });
};

export default listar_contato;
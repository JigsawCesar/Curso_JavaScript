const cadastrar_usuario = (contatos, novo_contato) => {

    // Validação: Não permitir e-mail duplicado
    let email_existe = false
    
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].email === novo_contato.email) {
            email_existe = true
            // Para a busca assim que encontrar
            break
        };
    };

    if (email_existe) {
        return { error: "Este e-mail já está cadastrado!" };
    };

    // Gerar ID sequencial (pega o último ID e soma 1)
    if (contatos.length > 0) {
        let ultimo_contato = contatos[contatos.length - 1];
        novo_contato.id = ultimo_contato.id + 1;
    } else {
        // Se a lista estiver vazia, ele é o primeiro
        novo_contato.id = 1;
    };

    contatos.push(novo_contato);
    return { data: novo_contato };
};

export default cadastrar_usuario;

/*
import { baralhos } from "./data.js";

function adicionarBaralho(titulo) {
  if (!titulo) {
    return { error: "O título é obrigatório." };
  }

  let novoId = 1;
  if (baralhos.length > 0) {
    const ultimoBaralho = baralhos[baralhos.length - 1];
    novoId = ultimoBaralho.id + 1;
  }

  const novoBaralho = {
    id: novoId,
    titulo: titulo,
  };

  baralhos.push(novoBaralho);
  return { data: novoBaralho };
}

export default adicionarBaralho;
*/
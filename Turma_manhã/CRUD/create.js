const cadastrar_usuario = (contatos, novo_contato) => {

    // Validação: Não permitir e-mail duplicado
    let emailExiste = false
    
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].email === novo_contato.email) {
            emailExiste = true
            // Para a busca assim que encontrar
            break
        };
    };

    if (emailExiste) {
        console.log("Erro: Este e-mail já está cadastrado!")
        return
    };

    // Gerar ID sequencial (pega o último ID e soma 1)
    if (contatos.length > 0) {
        let ultimo_contato = contatos[contatos.length - 1]
        novo_contato.id = ultimo_contato.id + 1
    } else {
        // Se a lista estiver vazia, ele é o primeiro
        novo_contato.id = 1
    }

    contatos.push(novo_contato)
    return
};

export default cadastrar_usuario;
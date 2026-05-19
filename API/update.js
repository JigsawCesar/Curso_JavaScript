const atualizar_cadastro = (contatos, id , novos_dados) => {
    
    const index = contatos.findIndex(contato => contato.id === id)

    if(index === -1){
        return res.status(404).send( { error: "Contato não encontrado!"} );
    };

    // Validação de e-mail na atualização
    if (novos_dados.email) {
        let email_em_uso = false
        for (let i = 0; i < contatos.length; i++) {
            let contato_atual = contatos[i]
            // Verifica se o email é igual ao digitado E se não é o próprio usuário atualizando
            if (contato_atual.email === novos_dados.email && contato_atual.id !== id) {
                email_em_uso = true
                break
            };
        };

        if (email_em_uso) {
            console.log(`⦙ Erro: O novo e-mail já está em uso por outro usuário!`)
            return
        };
    };

    // Atualiza apenas os campos preenchidos
    contatos[index].nome = novos_dados.nome || contatos[index].nome
    contatos[index].email = novos_dados.email || contatos[index].email
    // Se o usuário digitou novos telefones (o array é maior que zero), nós substituímos
    if (novos_dados.telefones.length > 0) {
        contatos[index].telefones = novos_dados.telefones
    };

    return 
};

export default atualizar_cadastro;
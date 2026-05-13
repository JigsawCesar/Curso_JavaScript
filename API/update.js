import { vermelho, negrito, reset } from "../../Calculadora/cores_terminal.js";

const atualizar_cadastro = (contatos, id , novos_dados) => {
    
    const indice = contatos.findIndex(contato => contato.id === id)

    if (indice === -1) {
        console.log(`${negrito}${vermelho}\n⦙ Erro: Contato não encontrado!${reset}`)
        return
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
            console.log(`${negrito}${vermelho}\n⦙ Erro: O novo e-mail já está em uso por outro usuário!${reset}`)
            return
        };
    };

    // Atualiza apenas os campos preenchidos
    contatos[indice].nome = novos_dados.nome || contatos[indice].nome
    contatos[indice].email = novos_dados.email || contatos[indice].email
    // Se o usuário digitou novos telefones (o array é maior que zero), nós substituímos
    if (novos_dados.telefones.length > 0) {
        contatos[indice].telefones = novos_dados.telefones
    };

    return
};

export default atualizar_cadastro;
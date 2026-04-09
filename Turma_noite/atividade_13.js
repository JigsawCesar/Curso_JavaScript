const prompt = require(`prompt-sync`)();

let biblioteca = [];
let livro = {
    titulo: `o senhor dos aneis`,
};
biblioteca.push(livro);
let menu = ``;

menu = prompt(`--- Menu ---\n1 - Cadastrar livro\n2 - Buscar livro\n3 - Listar livros disponíveis\n4 - Sair\n\nDigite a opção desejada: `);

if (menu == 1) {
    let livro = {};
    console.log(``);
    
    livro.titulo = prompt(`Digite o título do livro a cadastrar: `).toLowerCase();
    biblioteca.push(livro);
    console.log(`Livro cadastrado com sucesso!\n`);
    let continuar = prompt(`Deseja cadastrar outro livro? (sim/nao): `).toLowerCase();
    while (continuar === `sim`) {
        let livro = {};
        console.log(``);
        livro.titulo = prompt(`Digite o título do livro a cadastrar: `).toLowerCase();
        biblioteca.push(livro);
        console.log(`Livro cadastrado com sucesso!\n`);
        continuar = prompt(`Deseja cadastrar outro livro? (sim/nao): `).toLowerCase();
    }
}

if (menu == 2) {
    for (let i = -1; i < biblioteca.length; i++) {
        console.log(``);        
        let busca = prompt(`Digite o título do livro a buscar: `).toLowerCase();
        if (biblioteca[i].titulo === busca) {
            console.log(`Livro encontrado: ${biblioteca[i].titulo}`);
            encontrado = true;
            break;
        } else {
            console.log(`Livro não encontrado. Verifique a ortografia e tente novamente.`);
        }
    }

    if (!encontrado) {
        console.log(`Livro não encontrado. Verifique a ortografia e tente novamente.`);
    }
}

if (menu == 3) {
    console.log(`Livros disponíveis:`);
    for (let i = 0; i < biblioteca.length; i++) {
        console.log(`- ${biblioteca[i].titulo}`);
    }
};

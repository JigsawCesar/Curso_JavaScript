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
}
/*

TODO - Implementar opção 4 para sair do programa e comparar codigo com a solução do gemini.

let biblioteca = [];
let continuar = true;

console.log("--- BEM-VINDO À BIBLIOTECA DIGITAL ---");

while (continuar) {
    console.log("\n[1] Adicionar Livro | [2] Buscar Livro | [3] Exibir Todos | [4] Sair");
    let opcao = prompt("Escolha uma opção: ");

    if (opcao === '1') {
        // ADICIONAR: Criando um objeto e empurrando para o array
        let titulo = prompt("Título: ");
        let autor = prompt("Autor: ");
        
        let novoLivro = { 
            titulo: titulo, 
            autor: autor 
        };

        biblioteca.push(novoLivro);
        console.log("✔ Livro cadastrado!");

    } else if (opcao === '2') {
        // BUSCAR: Filtrando o array de objetos
        let busca = prompt("Digite o título para busca: ").toLowerCase();
        console.log("\nResultados encontrados:");
        
        let achou = false;
        biblioteca.forEach(livro => {
            if (livro.titulo.toLowerCase().includes(busca)) {
                console.log(`- ${livro.titulo} (Autor: ${livro.autor})`);
                achou = true;
            }
        });

        if (!achou) console.log("Nenhum livro com esse título.");

    } else if (opcao === '3') {
        // EXIBIR: Percorrendo o array de objetos
        console.log("\n--- ACERVO ATUAL ---");
        if (biblioteca.length === 0) {
            console.log("A biblioteca está vazia.");
        } else {
            biblioteca.forEach((livro, i) => {
                console.log(`${i + 1}. ${livro.titulo} - ${livro.autor}`);
            });
        }

    } else if (opcao === '4') {
        console.log("Encerrando o sistema...");
        continuar = false; // Quebra o laço while

    } else {
        console.log("Opção inválida, tente novamente.");
    }
}*/
app.js / main.js 

// Importando nossos dados e funções
import contatos from "./contatos.js";
import listarContatos from "./listar_contatos.js";
import adicionarContato from "./adicionar_contato.js";
import atualizarContato from "./atualizar_contato.js";
import removerContato from "./remover_contato.js";

import express from "express";

const app = express();
const porta = 3000;

app.use(express.json());

app.get(("/"), (requisicao, resposta) => {
  resposta.status(200).send({ mensagem: "Servidor funcionando!"})
});

app.post(("/contatos"), (requisicao, resposta) => {
  const { nome, email, telefones } = requisicao.body;
  /*
  const nome = requisicao.body.nome;
  const email = requisicao.body.email;
  const telefones = requisicao.body.telefones;
  */
  
  const resultado = adicionarContato(contatos, { nome, email, telefones });

  if (!resultado) {
    return resposta.status(400).send({ mensagem: "Email já cadastrado!" });
  }

  resposta.status(201).send( { mensagem: "Contato adicionado com sucesso!" } )
});

app.listen((porta), () =>{
  console.log(`Servidor rodando na porta ${porta}!`);
});



/*
function mainMenu() {
  console.log("\n--- Menu de Contatos ---");
  console.log("1. Listar Contatos (READ)");
  console.log("2. Adicionar Contato (CREATE)");
  console.log("3. Atualizar Contato (UPDATE)");
  console.log("4. Remover Contato (DELETE)");
  console.log("5. Sair");
}

let opcao = "0";

// O loop mantém o programa rodando até o usuário escolher sair
while (opcao != "5") {
  mainMenu();
  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      // Operação: READ
      listarContatos(contatos);
      break;
    case "2":
      // Operação: CREATE
      let novoContato = {
        nome: prompt("Nome: "),
        email: prompt("Email: "),
        telefones: [],
      };

      // Lógica para atualizar os múltiplos telefones
      let addMais = "sim";
      while (addMais.toLowerCase() === "sim") {
        novoContato.telefones.push(prompt("Telefone: "));
        addMais = prompt("Adicionar outro telefone? (sim/nao): ");
      }

      const adicionou = adicionarContato(contatos, novoContato);

      if (adicionou) {
        console.log("Contato adicionado com sucesso!");
      }
      break;
    case "3":
      // Operação: UPDATE
      let idAtualizar = parseInt(prompt("ID do contato a ser atualizado: "));

      let novosDados = {
        nome: prompt("Novo Nome (ou Enter para manter): "),
        email: prompt("Novo Email (ou Enter para manter): "),
        telefones: [],
      };

      // Lógica para atualizar os múltiplos telefones
      let atualizaTel = prompt("Deseja atualizar os telefones? (sim/nao): ");

      if (atualizaTel.toLowerCase() === "sim") {
        let editMais = "sim";
        while (editMais.toLowerCase() === "sim") {
          novosDados.telefones.push(prompt("Novo Telefone: "));
          editMais = prompt("Adicionar outro telefone? (sim/nao): ");
        }
      }

      const atualizou = atualizarContato(contatos, idAtualizar, novosDados);

      if (atualizou) {
        console.log("Contato atualizado com sucesso!");
      }
      break;
    case "4":
      // Operação: DELETE
      let idRemover = parseInt(prompt("ID do contato a ser removido: "));

      // Requisito de Confirmação
      let confirmar = prompt("Tem certeza que deseja remover este contato? (sim/nao): ");

      if (confirmar.toLowerCase() === "sim") {
        removerContato(contatos, idRemover);
      } else {
        console.log("Operação cancelada.");
      }
      break;
    case "5":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}
*/



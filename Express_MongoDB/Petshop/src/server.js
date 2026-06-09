import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import Agendamento from "./models/agendamento.js";
import conectar_DB from "./db.js";

dotenv.config({ path: "../.env" });
conectar_DB();

const router = express();
const PORT = process.env.PORT

router.use(express.json());

router.get(("/"), (req, res) => {
    res.json({message: "API do Petshop está no ar!"});
});

router.post(("/agendamentos"), async (req, res) =>{
    try {
        const { nome_pet, especie, nome_dono, telefone_dono, servico, data } = req.body;
        
        let valor = 0;

        if (especie == "Cão") {
            switch (servico) {
                case "Banho":
                    valor = 50;                    
                    break;
                case "Tosa":
                    valor = 60;
                    break;
                case "Banho e Tosa":
                    valor = 100;
                    break;
                default:
                    console.log("Serviço inválido!");
                    break;
            }
        }

        if (especie == "Gato") {
            switch (servico) {
                case "Banho":
                    valor = 60;                    
                    break;
                case "Tosa":
                    valor = 70;
                    break;
                case "Banho e Tosa":
                    valor = 110;
                    break;
                default:
                    console.log("Serviço inválido!");
                    break;
            }
        } 
        
        if (especie == "Outro") {
            switch (servico) {
                case "Banho":
                    valor = 40;                    
                    break;
                case "Tosa":
                    valor = 50;
                    break;
                case "Banho e Tosa":
                    valor = 80;
                    break;
                default:
                    console.log("Serviço inválido!");
                    break;
            };
        
        }

        const novo_agendamento = new Agendamento({
            nome_pet,
            especie,
            nome_dono,
            telefone_dono,
            servico,
            data,
            valor
        });

        await novo_agendamento.save();
        
        res.status(201).json({ message: "Agendamento criado com sucesso!", agendamento: novo_agendamento })
    } catch (erro) {
        res.status(400).json({ message: `Erro ao criar o agendamento! ${ erro.message }`})
    };
});

router.get(("/agendamentos"), async (req,res) => {
    try {
        const todos_agendamentos = await Agendamento.find();
        res.status(200).json({ message: `Todos os elementos foram listados com sucesso!`, agendamentos: todos_agendamentos })
    } catch (erro) {
        res.status(400).json({ message: `Erro ao listar os agendamentos! ${ erro.message }` })
    };
});

router.get(("/agendamentos/busca"), async (req,res) =>{
    try {
        const nome = req.query.nome;
        const agendamentos = await Agendamento.find({ nome_pet: { $regex: nome, $options: "i"} }); //regex busca por partes do texto e partes da string e option ignora maiúsculas e minúsculas 
        res.status(200).json({ message: "Busca efetuada com sucesso!", agendamentos: agendamentos })
    } catch (erro) {
        res.status(400).json({ message: `Erro: ${ erro.message }` })
    }
});

router.patch(("/agendamentos/:id"), async (req,res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const agendamento_atualizado = await Agendamento.findByIdAndUpdate(id, { status: status}, {runValidators: true, new: true});

        if (!agendamento_atualizado) {
            return res.status(404).json({ message: "Agendamento não encontrado!" });
        } else {
            res.status(200).json({ message: `Agendamento atualizado com sucesso!`, agendamento_atualizado: agendamento_atualizado });
        };

    } catch (erro) {
        res.status(500).json({ message: `Erro de servidor: ${ erro.message }` });
    }
});

router.delete(("/agendamentos/:id"), async (req,res) =>{
    try {
        const id = req.params.id;
        const agendamento_deletado = Agendamento.findByIdAndDelete(id);

        if(!agendamento_deletado) {
            return res.status(404).json({ message: "Agendamento não encontrado" });
        } else {
            res.status(200).json({ message: "Agendamento deletado com sucesso!", agendamento_deletado: agendamento_deletado })
        };

    } catch (erro) {
        res.status(500).json({ message: `Erro de servidor: ${ erro.message }` });
    };
})

router.listen((PORT), () => {
    console.log(`Conectado com a porta ${PORT} com sucesso!`);
});
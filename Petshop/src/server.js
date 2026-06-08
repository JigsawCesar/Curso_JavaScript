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
            }
        
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

router.listen((PORT), () => {
    console.log(`Conectado com a porta ${PORT} com sucesso!`);
});
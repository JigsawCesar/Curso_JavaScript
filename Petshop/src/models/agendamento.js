import mongoose from "mongoose";

const agendamento_schema = new mongoose.Schema({
    nome_pet: {
        type: String,
        required: [true, "O nome do pet é obrigatório!"]
    },
    
    especie: {
        type: String,
        required: [true, "A espécie do pet é obrigatória!"],
        enum: {
            values: ["Cão", "Gato", "Outro"],
            message: "A espécie deve ser Cão, Gato ou Outro!"
        }
    },

    nome_dono: {
        type: String,
        required: [true, "O nome do dono é obrigatório!"]
    },

    telefone_dono: {
        type: String,
        required: [true, "O telefone do dono é obrigatório!"]
    },

    servico: {
        type: String,
        required: [true, "A espécie do pet é obrigatória!"],
        enum: {
            values: ["Banho", "Tosa", "Banho e Tosa"],
            message: "O serviço deve ser Banho, Tosa ou Banho e Tosa!"
        }
    },

    data: {
        type: Date,
        required: [true, "A data é obrigatória!"]
    },

    valor: {
        type: Number
    },

    status: {
        type: String,
        default: "Agendado",
        enum: {
            values: ["Agendado", "Concluído", "Cancelado"],
            message: "O status deve ser Agendado, Concluído ou Cancelado!"
        }
    }
});

const Agendamento = mongoose.model("Agendamentos", agendamento_schema);

export default Agendamento;
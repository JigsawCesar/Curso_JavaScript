import mongoose from "mongoose";

const matricula_schema = new mongoose.Schema({
    
    nome_aluno: {
        type: String,
        required: [ true, "O nome do aluno é obrigatório!" ]
    },

    idade: {
        type: Number,
        required: [ true, "A idade é obrigatória!" ]
    },

    modalidade: {
        type: String,
        required: [ true, "A modalidade é obrigatória!" ],
        enum: {
            values: [ "Musculação", "Funcional", "Dança" ],
            message: "A modalidade deve ser Musculação, Funcional ou Dança!"
        }
    },

    plano: {
        type: String,
        required: [ true, "O Plano é obrigatório!" ],
        enum: {
            values: [ "Mensal", "Trimestral", "Semestral" ],
            message: "A modalidade deve ser Mensal, Trimestral ou Semestral!"
        }
    },

    data_matricula: {
        type: Date,
        required: [true, "A data é obrigatória!"]
    },

    valor_mensal: {
        type: Number
    },

    valor_total: {
        type: Number
    },

    status: {
        type: String,
        default: "Ativa",
        enum: {
             values: ["Ativa", "Pausada", "Cancelada"],
             message: "O status deve ser Ativa, Pausada ou Cancelada!"
            }
    }
    
});

const Matricula = mongoose.model("Matricula", matricula_schema);

export default Matricula;
import Agendamento from "../models/agendamento.js";

async function criar(dadosAgendamento) {
    return Agendamento.create(dadosAgendamento);
};

async function listar(dadosAgendamento) {
    return Agendamento.find()
};

const AgendamentoRepository = {
    criar,
    listar
};

export default AgendamentoRepository;

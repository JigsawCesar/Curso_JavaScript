import PromptSync from "prompt-sync";
const prompt = PromptSync();

const adicionar_consulta = (consultas, pacientes, medicos) => {
    
    const nova_consulta = {
        id: 0,
        idMedico: Number(prompt(`Digite o ID do médico: `)),
        idPacientes: Number(prompt(`Digite o ID do paciente: `)),
        data: prompt(`Digite a data da consulta (DD/MM/AAAA): `),
        descricao: prompt(`Digite a descrição da consulta: `)
    };

    if (consultas.length > 0) {
        let ultima_consulta = consultas[consultas.length - 1];
        nova_consulta.id = ultima_consulta.id + 1;
    } else {
        nova_consulta.id = 1;
    };

    const indice_medico = medicos.findIndex (medicos => medicos.id === nova_consulta.idMedico);
    const indice_pacientes = pacientes.findIndex (pacientes => pacientes.id === nova_consulta.idPacientes);

    if (indice_medico == -1) {
        console.log(`Erro: Médico não encontrado!`);
        
    } else {
        console.log(`A consulta será com: ${medicos[indice_medico].nome}`/n  );
    };

    if (indice_pacientes == -1) {
        console.log(`Erro: Paciente não encontrado!`);
    } else {
        
    };

    consultas.push(nova_consulta);
    return
};

export default adicionar_consulta;
const prompt = require(`prompt-sync`)();

let servidor = {
    nome: `Servidor principal AWS`,
    capacidadeMaximaGb: 500,
    sitesHospedados: []
};

let site = {
    dominio: `www.site1.com`,
    tamanhoOcupadoGb: 100
}

servidor.sitesHospedados.push(site);

let dominio = (prompt(`Digite o domínio do site a ser hospedado: `));
let tamanho = parseFloat((prompt(`Digite o tamanho ocupado em GB do site: `)));


let tamanhoTotal = servidor.sitesHospedados[0].tamanhoOcupadoGb + tamanho;

if (tamanhoTotal <= servidor.capacidadeMaximaGb) {
    
    let site = {
        dominio: dominio,
        tamanhoOcupadoGb: (tamanho)
    };
    servidor.sitesHospedados.push(site);
    console.log(`Upload concluído! Sistema operacional`);
    
} else {
    
    servidor.alertaSobrecarga = true;
    console.log(`\n- Falha: Falta de Espaço Físico. Cancele o deploy!\n`);

}

console.log(`--- Status do servidor ---\n\nNome: ${servidor.nome}\nCapacidade Máxima: ${servidor.capacidadeMaximaGb} GB
Sites Hospedados:`);

servidor.sitesHospedados.forEach((site) => {
    console.log(`- Domínio: ${site.dominio} | Tamanho: ${site.tamanhoOcupadoGb}GB`)
});
const media = (lista) =>{
    if (lista.length === 0) return 0;
    let soma = lista.reduce((acumulador, valor_atual) => acumulador + valor_atual, 0);
    return soma / lista.length;
};

export default media;
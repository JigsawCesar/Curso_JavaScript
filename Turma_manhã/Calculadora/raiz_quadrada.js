const raiz_quadrada = () => {
    console.log();
    
    while (true) {
        number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a raíz quadrada: ${reset}`));
        console.clear();
        
        if (!(isNaN(number1))) {
            resultado = Math.sqrt(number1);
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ √¯ ${number1} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        } else {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        };
    };   
};

export default raiz_quadrada;
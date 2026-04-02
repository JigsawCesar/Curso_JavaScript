const porcentagem = () => {
    console.log();
    
    while (true) {
        number1 = Number(prompt(`${negrito}${ciano}⦙ Digite o número que deseja obter a porcentagem: ${reset}`));
        number2 = Number(prompt(`${negrito}${ciano}⦙ Digite a porcentagem que deseja obter: ${reset}`));
        console.clear();
        
        if (!(isNaN(number1) || isNaN(number2))) {
            resultado = (number1 * number2) / 100;
            console.log(`\n${negrito}${magenta}⦙ Resultado:\n⦙ ${number2}% de ${number1} = ${resultado}${reset}\n`);
            prompt(`${negrito}${ciano}⦙ Pressione Enter para voltar ao menu ...${reset}`);
            break;
        } else {
            console.log(`\n${negrito}${vermelho}⦙ ⚠️ Entrada inválida! Por favor, digite um número.${reset}\n`);
        };
    };   
};

export default porcentagem;
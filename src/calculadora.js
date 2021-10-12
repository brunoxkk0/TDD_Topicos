
function calcular(funcionario){
    if(funcionario.cargo === 'DESENVOLVEDOR'){
        if(funcionario.salarioBase >= 3000){
            return funcionario.salarioBase * (1 - 0.20);
        }
    }
}

exports.calcular = calcular;

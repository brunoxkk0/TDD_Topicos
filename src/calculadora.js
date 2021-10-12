
function calc(value, percentage){
    return value * (1 - percentage);
}

function calcular(funcionario){

    switch (funcionario.cargo){
        case "DESENVOLVEDOR":{
            if(funcionario.salarioBase >= 3000){
                return calc(funcionario.salarioBase, 0.20)
            }else {
                return calc(funcionario.salarioBase, 0.10)
            }
        }
    }

}

exports.calcular = calcular;

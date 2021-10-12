
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

        case "DBA":
        case "TESTADOR":{

            if(funcionario.salarioBase >= 2000){
                return calc(funcionario.salarioBase, 0.25)
            }else{
                return calc(funcionario.salarioBase,0.15)
            }

        }

        case "GERENTE":{

            if(funcionario.salarioBase >= 5000){
                return funcionario.salarioBase * (1 - 0.30)
            }else {
                return funcionario.salarioBase * (1 - 0.20)
            }

        }

    }

}

exports.calcular = calcular;

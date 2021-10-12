
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

    }

}

exports.calcular = calcular;

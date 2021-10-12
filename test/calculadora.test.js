import {calcular} from "../src/calculadora";

describe("Calculadora de Salarios", () => {

    test("Calcula Desenvolvedor", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 5000,
            cargo: "DESENVOLVEDOR"
        }

        expect(calcular(funcionario)).toBe(4000)

    })

})

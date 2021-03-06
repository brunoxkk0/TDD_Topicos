const {calcular} = require("../src/calculadora");

describe("Calculadora de Salarios", () => {

    test("Calcula Desenvolvedor - 5000", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 5000,
            cargo: "DESENVOLVEDOR"
        }

        expect(calcular(funcionario)).toBe(4000)

    })

    test("Calcula Desenvolvedor - 2800", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 2800,
            cargo: "DESENVOLVEDOR"
        }

        expect(calcular(funcionario)).toBe(2520)

    })

    test("Calcula DBA - 2800", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 2800,
            cargo: "DBA"
        }

        expect(calcular(funcionario)).toBe(2100)

    })

    test("Calcula DBA - 1900", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 1900,
            cargo: "DBA"
        }

        expect(calcular(funcionario)).toBe(1615)

    })

    test("Calcula TESTADOR - 2800", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 2800,
            cargo: "TESTADOR"
        }

        expect(calcular(funcionario)).toBe(2100)

    })

    test("Calcula TESTADOR - 1900", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 1900,
            cargo: "TESTADOR"
        }

        expect(calcular(funcionario)).toBe(1615)

    })

    test("Calcula GERENTE - 5000", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 5000,
            cargo: "GERENTE"
        }

        expect(calcular(funcionario)).toBe(3500)

    })

    test("Calcula GERENTE - 4000", () => {

        let funcionario = {
            nome: "fulano",
            email: "fulano@email.com",
            salarioBase: 4000,
            cargo: "GERENTE"
        }

        expect(calcular(funcionario)).toBe(3200)

    })

})

import colors from "colors"
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const matriz = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => "L"));
const asientoOcupado = "X";


export function mostrarMenu() {
    rl.resume()
    return new Promise(resolve => {
        console.clear()
        console.log("**********************************************".green);
        console.log("Bienvenido al sistema de apartado de cines".green);
        console.log("**********************************************".green);
        console.log("A: para elegir asiento".green);
        console.log("L: para listar asientos".green);
        console.log("Q: para salir".green)
        rl.question("Seleccione una opcion: ", (answer) => {
            resolve(answer.toString().toUpperCase())
        })
    })
}

export function selectOption(option) {
    switch (option) {
        case "A":
            elegirAsiento();
            break;
        case "L":
            listarAsientos();
            break;
        case "Q":
            rl.close();
            break;
    }

}

export function elegirAsiento() {
    console.clear()
    let question
    console.log("**********************************************");
    question = "Ingrese su numero de asiento de 0 a 9: "
    asiento = rl.question(question, (numAsiento) => {
        return numAsiento;
    })
    // console.log("**********************************************");
    // question = "Ingrese su numero de fila de 0 a 9"
    // fila = rl.question(question, (numFila) => {
    //     return numFila
    // })

    // if (matriz[asiento][fila] == "L") {
    //     matriz[asiento][fila] = asientoOcupado;
    // }
    // else {
    //     console.log("El asiento ya esta ocupado elige otro, enter para continuar");
    //     rl.addListener("data", () => {
    //         elegirAsiento()
    //     })
    // }

}

async function listarAsientos() {
    console.clear()
    console.log("**********************************************");
    console.log("Listado de asientos");
    console.log("**********************************************");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
    console.log("**********************************************");
    await new Promise(resolve =>
        rl.question("Presione enter para continuar", () => {
            rl.pause()
            resolve()
        }))
    mostrarMenu()

}


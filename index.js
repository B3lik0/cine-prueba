/*Sistema de apartado de cines*/
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const asiento = "X";
const stdin = process.openStdin();
const matriz = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => "L"));
const opciones = {
    A: () => elegirAsiento(),
    L: () => listarAsientos(matriz),
    Q: () => process.exit(1)
}

function listarAsientos() {
    console.clear()
    console.log("**********************************************");
    console.log("Listado de asientos");
    console.log("**********************************************");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
    console.log("**********************************************");
}

function elegirAsiento() {
    console.clear()
    console.log("**********************************************");
    console.log("Ingrese su numero de asiento de 1 a 10");
    console.log("**********************************************");
    rl.addListener("data", (numAsiento) => {
        if (matriz[numAsiento] == "L") {
            matriz[numAsiento] = "X";
        } else {
            console.log("El asiento ya esta ocupado elige otro");
        }
    })

}

function start() {
    console.clear()
    console.log("**********************************************");
    console.log("Bienvenido al sistema de apartado de cines");
    console.log("**********************************************");
    console.log("A: para elegir asiento");
    console.log("L: para listar asientos");
    console.log("Q: para salir")
    rl.question("", (answer) => {
        opciones[answer.toString().toUpperCase()]()
    })
}
start()
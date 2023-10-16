import colors from "colors"
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });
let matriz = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => "L"));
const asientoOcupado = "X";

export async function mostrarMenu() {
    console.clear()
    console.log("**********************************************".green);
    console.log("Bienvenido al sistema de apartado de cines".green);
    console.log("**********************************************".green);
    console.log("A: para elegir asiento".green);
    console.log("L: para listar asientos".green);
    console.log("Q: para salir".green)
    const answer = await rl.question("Seleccione una opcion: ");
    selectOption(answer.toString().toUpperCase())
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
            cerrarMenu()
            break;
        default:
            mostrarMenu()
    }

}

async function elegirAsiento() {
    console.clear()
    console.log("**********************************************");
    let asiento = await rl.question("Ingrese su numero de asiento de 0 a 9: ")
    let fila = await rl.question("Ingrese su numero de fila de 0 a 9: ")
    asiento = parseInt(asiento)
    fila = parseInt(fila)
    if (matriz[asiento][fila] == "L") {
        matriz[asiento][fila] = asientoOcupado;
        console.log("Asiento Ocupado".green)
        const enter = await rl.question("Presione Enter para continuar")
        mostrarMenu()
    }
    else {
        console.log("Asiento Ocupado".red)
        const answer = await rl.question("Presione V volver elegir o S para regresar al menu: ")
        if (answer.toString().toUpperCase() == "V") {
            elegirAsiento()
        }
        else {
            mostrarMenu()
        }
    }

}

async function listarAsientos() {
    console.clear()
    console.log("**********************************************");
    console.log("Listado de asientos");
    console.log("**********************************************");
    console.table(matriz)
    console.log("**********************************************");

    const enter = await rl.question("Presione enter para continuar")
    mostrarMenu()
}

async function cerrarMenu() {
    return new Promise(resolve => {
        rl.close()
        resolve()
        console.clear()
        console.log("**********************************************");
        console.log("Gracias por su compra vuelva pronto".green);
        console.log("**********************************************");
        process.exit()
    })
}
/*Sistema de apartado de cines*/
import { mostrarMenu, selectOption } from './menu.js';

const main = async () => {
    let opt
    do {
        opt = await mostrarMenu()
        selectOption(opt)
    } while (true)
}

main()
/*Sistema de apartado de cines*/
import { mostrarMenu, selectOption } from './menu.js';



const main = async () => {
    const opt = await mostrarMenu()
    selectOption(opt)
}
main()
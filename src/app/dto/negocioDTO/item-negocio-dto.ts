import { Horario } from "../horario";
import { Ubicacion } from "../ubicacion";

export class ItemNegocioDTO {
    constructor(
        public codigoNegocio: string = '',
        public codigoCliente: string = '',
        public nombre: string = '',
        public descripcion: string = '',
        public categoriaNegocio: string = '',
        public estadoNegocio: string = '',
        public ubicacion: Ubicacion = new Ubicacion(1,1),
        public visitas: number = 0,
        public listaTelefonos: string[] = [],
        public listaRutasImagenes: string[] = [],
        public listaHorarios: Horario[] = [],
        public estadoRegistro: string = ''
    ){}
}

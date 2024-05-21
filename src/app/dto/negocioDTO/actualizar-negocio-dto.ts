import { Horario } from "../horario";
import { Ubicacion } from "../ubicacion";

export class ActualizarNegocioDTO {
    constructor(
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public nombreNegocio: string = '',
        public descripcion: string = '',
        public categoriaNegocio: string = '',
        public listaImagenesNegocio: string[] = [],
        public listaTelefonos: string[] = [],
        public listaHorarios: Horario[] = [],
        public ubicacion: Ubicacion = new Ubicacion(1,1)
    ){}
}

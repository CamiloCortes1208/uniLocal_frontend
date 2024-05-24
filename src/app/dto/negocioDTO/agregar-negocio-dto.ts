import { Horario } from "../horario";
import { Ubicacion } from "../ubicacion";

export class AgregarNegocioDTO {
    constructor(
        public codigoCliente: string = '',
        public nombreNegocio: string = '',
        public descripcion: string = '',
        public categoriaNegocio: string = '',
        public listaImagenesNegocio: string[] = [],
        public listaTelefonos: string[] = [],
        public listaHorarios: Horario[] = [],
        public ubicacion: Ubicacion = new Ubicacion(1,1)   
    ) { }
}

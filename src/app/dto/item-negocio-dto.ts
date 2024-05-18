import { Ubicacion } from "./ubicacion";

export class ItemNegocioDTO {
    constructor(
        public codigoNegocio: string = '',
        public nombre: string = '',
        public descripcion: string = '',
        public imagenDestacada: string = '',
        public tipoNegocio: string = '',
        public ubicacion: Ubicacion = new Ubicacion(1,1),
        public calificacionPromedio: number = 0,
        public estadoNegocio: string = ''
    ) { }
}
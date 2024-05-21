import { Horario } from "../horario";

export class AgregarEventoDTO {
    constructor(
        public idNegocio: string = '',
        public horario: Horario[] = [],
        public nombre: string = '',
        public descripcion: string = '',
        public tipoEvento: string = ''
    ){}
}

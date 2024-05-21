import { Horario } from "../horario";

export class ActualizarEventoDTO {
    constructor(
        public codigoEvento: string = '',
        public horario: Horario[] = [],
        public nombre: string = '',
        public descripcion: string = '',
        public tipoEvento: string = ''
    ){}
}

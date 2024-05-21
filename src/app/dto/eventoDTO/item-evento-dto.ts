import { Horario } from "../horario";

export class ItemEventoDTO {
    constructor(
        public codigoEvento: string = '',
        public codigoNegocio: string = '',
        public nombre: string = '',
        public descripcion: string = '',
        public tipoEvento: string = '',
        public diasDisponible: Horario[] = [],
        public estadoEvento: string = ''
    ){}
}

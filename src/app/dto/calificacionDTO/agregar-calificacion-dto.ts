export class AgregarCalificacionDTO {
    constructor(
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public fecha: Date = new Date()
    ){}
}

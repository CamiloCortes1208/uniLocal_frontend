export class DetalleCalificacionDTO {
    constructor(
        public codigoCalificacion: string = '',
        public codigoNegocio: string = '',
        public codigoCliente: string = '',
        public fecha: Date = new Date(),
        public valoracion: number = 0,
        public mensaje: string = '',
        public respuesta: string = ''
    ){}
}

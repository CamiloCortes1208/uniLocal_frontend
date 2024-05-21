export class DetalleRevisionDTO {
    constructor(
        public codigoRevision: string = '',
        public fecha: Date = new Date(),
        public codigoModerador: string = '',
        public codigoNegocio: string = '',
        public descripcion: string = '',
        public estadoNegocio: string = ''
    ){}
}

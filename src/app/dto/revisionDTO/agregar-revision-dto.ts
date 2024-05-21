export class AgregarRevisionDTO {
    constructor(
        public fecha: Date = new Date(),
        public codigoModerador: string = '',
        public codigoNegocio: string = '',
        public descripcion: string = '',
        public estadoNegocio: string = ''
    ){}
}

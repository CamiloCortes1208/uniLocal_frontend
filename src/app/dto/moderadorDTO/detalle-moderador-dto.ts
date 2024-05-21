export class DetalleModeradorDTO {
    constructor(
        public idCodigoModerador: string = '',
        public nombre: string = '',
        public rutaFotoPerfil: string = '',
        public email: string = '',
        public estadoRegistro: string = ''
    ){}
}

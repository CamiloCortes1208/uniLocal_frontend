export class AgregarPublicacionDTO {
    constructor(
        public descripcion: string = '',
        public rutaImagen: string = '',
        public idCliente: string = '',
        public fechaPublicacion: Date = new Date()
    ){}
}

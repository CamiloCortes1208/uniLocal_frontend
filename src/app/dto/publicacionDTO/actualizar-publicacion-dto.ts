export class ActualizarPublicacionDTO {
    constructor(
        public idPublicacion: string = '',
        public rutaImagen: string = '',
        public descripcion: string = ''
    ){}
}

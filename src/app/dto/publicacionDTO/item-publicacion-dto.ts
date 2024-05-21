export class ItemPublicacionDTO {
    constructor(
        public codigoPublicacion: string = '',
        public codigoCliente: string = '',
        public descripcion: string = '',
        public listaMeGustas: string[] = [],
        public rutaImagen: string = '',
        public fechaPublicacion: Date = new Date()
    ){}
}

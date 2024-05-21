export class ItemOpinionDTO {
    constructor(
        public codigoCliente: string = '',
        public codigoOpinion: string = '',
        public codigoPublicacion: string = '',
        public mensaje: string = '',
        public fecha: Date = new Date(),
        public cantidadMeGusta: string[] = []
    ){}
}

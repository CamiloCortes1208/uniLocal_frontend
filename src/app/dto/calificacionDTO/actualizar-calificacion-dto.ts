export class ActualizarCalificacionDTO {
    constructor(
        public idCalificacion: string = '',
        public valoracion: number = 0,
        public mensaje: string = ''
    ){}
}

export class ItemClienteDTO {
    constructor(
        public codigo: string = '',
        public nombre: string = '',
        public fotoPerfil: string = '',
        public nickname: string = '',
        public email: string = '',
        public ciudadResidencia: string = '',
        public listaNegociosFavoritos: string[] = []
    ){}
}

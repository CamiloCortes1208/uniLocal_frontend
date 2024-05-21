export class CambioPasswordDTO{
    constructor(
        public passwordVieja: string = '',
        public passwordNueva: string = '',
        public id: string = ''
    ){}
}
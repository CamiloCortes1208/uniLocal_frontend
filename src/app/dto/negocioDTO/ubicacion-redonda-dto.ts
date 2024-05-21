import { Ubicacion } from "../ubicacion";

export class UbicacionRedondaDTO {
    constructor(
        public ubicacion: Ubicacion = new Ubicacion(1,1),
        public kmRedonda: number = 0
    ){}
}

import { Injectable } from '@angular/core';
import { ItemNegocioDTO } from '../dto/item-negocio-dto';
import { RegistroNegocioDTO } from '../dto/registro-negocio-dto';
import { Ubicacion } from '../dto/ubicacion';

@Injectable({
  providedIn: 'root'
})

export class NegociosService {

  negocios: ItemNegocioDTO[];

  constructor() {
    this.negocios = [];
    
    this.negocios.push(new ItemNegocioDTO('1', 'Bar Armenia', 'Ven y conoce el mejor bar de la ciudad',
    'https://picsum.photos/100', 'BAR', new Ubicacion(4.531456060381842,
         -75.68035469963664), 4.5, 'APROBADO'));

    this.negocios.push(new ItemNegocioDTO('2', 'Restaurante La Casona', 'Ven y conoce el mejor restaurante de la ciudad',
    'https://picsum.photos/100', 'RESTAURANTE', new Ubicacion(4.551298538672697, -75.65858458442557), 4.0, 'APROBADO'));

    this.negocios.push(new ItemNegocioDTO('3', 'Peluquería La 33', 'Ven y conoce la mejor peluquería de la ciudad'
    ,'https://picsum.photos/100','PELUQUERIA', new Ubicacion(4.541984423452234, -75.68579829641877), 4.0, 'RECHAZADO'));

    this.negocios.push(new ItemNegocioDTO('4', 'Veterinaria Los Amigos',
    'Ven y conoce la mejor veterinaria de la ciudad','https://picsum.photos/100', 'VETERINARIA',
     new Ubicacion(4.539872786267409, -75.65011488244343), 4.0, 'APROBADO'));
  }

  public listar(): ItemNegocioDTO[] {
    return this.negocios;
  }

  public obtener(codigo: string): ItemNegocioDTO | undefined {
    return this.negocios.find(negocios => negocios.codigoNegocio == codigo);
  }

  public crear(negocioNuevo: RegistroNegocioDTO) {
    const codigo = (this.negocios.length + 1).toString();
    this.negocios.push(new ItemNegocioDTO(codigo, negocioNuevo.nombre,
      negocioNuevo.imagenes[0], negocioNuevo.tipoNegocio, negocioNuevo.descripcion, negocioNuevo.ubicacion, 0, 'PENDIENTE'));
  }

  public eliminar(codigo: string) {
    this.negocios = this.negocios.filter(n => n.codigoNegocio !== codigo);
  }

  buscar(cadenaBusqueda: string): ItemNegocioDTO[] {
    const palabraLower = cadenaBusqueda.toLowerCase();
    return this.negocios.filter(negocio =>
      negocio.nombre.toLowerCase().includes(palabraLower)
    );
  }

}
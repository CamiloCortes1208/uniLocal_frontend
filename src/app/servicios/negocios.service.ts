import { Injectable } from '@angular/core';
import { ItemNegocioDTO } from '../dto/negocioDTO/item-negocio-dto';
import { AgregarNegocioDTO } from '../dto/negocioDTO/agregar-negocio-dto';
import { Ubicacion } from '../dto/ubicacion';
import { Horario } from '../dto/horario';

@Injectable({
  providedIn: 'root'
})

export class NegociosService {

  negocios: ItemNegocioDTO[];

  constructor() {
    this.negocios = [];

    this.negocios.push(new ItemNegocioDTO('1', 'c1','Bar Armenia', 'Ven y conoce el mejor bar de la ciudad',
    'BAR','APROBADO',new Ubicacion(4.531456060381842,
      -75.68035469963664),0, ['12345123'],['https://picsum.photos/100'], [new Horario()], 'ACTIVO' ));

    this.negocios.push(new ItemNegocioDTO('1', 'c1','Bar Armenia', 'Ven y conoce el mejor bar de la ciudad',
    'BAR','APROBADO',new Ubicacion(4.531456060381842,
      -75.68035469963664),0, ['12345123'],['https://picsum.photos/100'], [new Horario()], 'ACTIVO' ));

    this.negocios.push(new ItemNegocioDTO('1', 'c1','Bar Armenia', 'Ven y conoce el mejor bar de la ciudad',
    'BAR','APROBADO',new Ubicacion(4.531456060381842,
      -75.68035469963664),0, ['12345123'],['https://picsum.photos/100'], [new Horario()], 'ACTIVO' ));

    this.negocios.push(new ItemNegocioDTO('1', 'c1','Bar Armenia', 'Ven y conoce el mejor bar de la ciudad',
    'BAR','APROBADO',new Ubicacion(4.531456060381842,
      -75.68035469963664),0, ['12345123'],['https://picsum.photos/100'], [new Horario()], 'ACTIVO' ));
  }

  public listar(): ItemNegocioDTO[] {
    return this.negocios;
  }

  public obtener(codigo: string): ItemNegocioDTO | undefined {
    return this.negocios.find(negocios => negocios.codigoNegocio == codigo);
  }

  public crear(negocioNuevo: AgregarNegocioDTO) {
    const codigo = (this.negocios.length + 1).toString();
    this.negocios.push(new ItemNegocioDTO(codigo, negocioNuevo.codigoCliente, negocioNuevo.nombre,
      negocioNuevo.descripcion,negocioNuevo.tipoNegocio,'APROBADO',negocioNuevo.ubicacion,0,negocioNuevo.telefonos,negocioNuevo.imagenes,negocioNuevo.horarios,'ACTIVO'));
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
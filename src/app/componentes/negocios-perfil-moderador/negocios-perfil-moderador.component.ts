import { Component } from '@angular/core';
import { NegociosService } from '../../servicios/negocios.service';
import { ItemNegocioDTO } from '../../dto/item-negocio-dto';

@Component({
  selector: 'app-negocios-perfil-moderador',
  standalone: true,
  imports: [],
  templateUrl: './negocios-perfil-moderador.component.html',
  styleUrl: './negocios-perfil-moderador.component.css'
})
export class NegociosPerfilModeradorComponent {
  negocios: ItemNegocioDTO[];

  constructor(private negocioService: NegociosService) {
    this.negocios = [];
    this.listarNegocios();
  }
  
  public listarNegocios() {
    this.negocios = this.negocioService.listar();
  }
}

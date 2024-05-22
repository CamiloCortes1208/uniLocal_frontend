import { Component } from '@angular/core';
import { NegociosService } from '../../servicios/negocios.service';
import { ItemNegocioDTO } from '../../dto/negocioDTO/item-negocio-dto';
import { RechazarNegocioComponent } from "../rechazar-negocio/rechazar-negocio.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-negocios-perfil-moderador',
    standalone: true,
    templateUrl: './negocios-perfil-moderador.component.html',
    styleUrl: './negocios-perfil-moderador.component.css',
    imports: [RechazarNegocioComponent, CommonModule, RouterLink]
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

import { Component } from '@angular/core';
import { NegociosService } from '../../servicios/negocios.service';
import { ItemNegocioDTO } from '../../dto/negocioDTO/item-negocio-dto';
import { RechazarNegocioComponent } from "../rechazar-negocio/rechazar-negocio.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../servicios/token/token.service';

@Component({
    selector: 'app-negocios-perfil-moderador',
    standalone: true,
    templateUrl: './negocios-perfil-moderador.component.html',
    styleUrl: './negocios-perfil-moderador.component.css',
    imports: [RechazarNegocioComponent, CommonModule, RouterLink]
})
export class NegociosPerfilModeradorComponent {
  negocios: ItemNegocioDTO[];

  constructor(private negocioService: NegociosService, private tokenService: TokenService) {
    this.negocios = [];
    this.listarNegocios();
  }
  
  public listarNegocios() {
    const codigoCliente = this.tokenService.getCodigo();
    this.negocioService.listarNegociosPropietario(codigoCliente).subscribe({
        next: (data) => {
            this.negocios = data.respuesta;
        },
        error: (error) => {
            console.error(error);
        }
    });
}
  
}

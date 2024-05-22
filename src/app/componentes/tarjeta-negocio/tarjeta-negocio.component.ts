import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocioDTO/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';

@Component({
  selector: 'app-tarjeta-negocio',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-negocio.component.html',
  styleUrl: './tarjeta-negocio.component.css'
})
export class TarjetaNegocioComponent {
  negocios: ItemNegocioDTO[];

  constructor(private negocioService: NegociosService) {
      this.negocios = [];
      /// this.listarNegocios();
  }

  /*public listarNegocios() {
      this.negocios = this.negocioService.listarNegociosPropietario();
  }*/

}

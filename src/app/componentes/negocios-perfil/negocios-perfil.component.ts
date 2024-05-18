import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarjetaNegocioComponent } from "../tarjeta-negocio/tarjeta-negocio.component";

@Component({
    selector: 'app-negocios-perfil',
    standalone: true,
    templateUrl: './negocios-perfil.component.html',
    styleUrl: './negocios-perfil.component.css',
    imports: [CommonModule, RouterModule, TarjetaNegocioComponent]
})

export class NegociosPerfilComponent {
    negocios: ItemNegocioDTO[];

    constructor(private negocioService: NegociosService) {
        this.negocios = [];
        this.listarNegocios();
    }

    public listarNegocios() {
        this.negocios = this.negocioService.listar();
    }

}
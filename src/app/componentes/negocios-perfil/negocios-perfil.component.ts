import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocioDTO/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarjetaNegocioComponent } from "../tarjeta-negocio/tarjeta-negocio.component";
import { TokenService } from '../../servicios/token/token.service';
import { Ubicacion } from '../../dto/ubicacion';
import { Horario } from '../../dto/horario';

@Component({
    selector: 'app-negocios-perfil',
    standalone: true,
    templateUrl: './negocios-perfil.component.html',
    styleUrl: './negocios-perfil.component.css',
    imports: [CommonModule, RouterModule, TarjetaNegocioComponent]
})

export class NegociosPerfilComponent {
    negocios: ItemNegocioDTO[];
    negociosRechazados: ItemNegocioDTO[];

    constructor(private negocioService: NegociosService, private tokenService: TokenService) {
        this.negocios = [];
        this.negociosRechazados = [];
        this.listarNegocios();
        this.listarNegociosRechazados();
    }

    public listarNegocios() {
        this.negocioService.listarNegociosPropietario(this.tokenService.getCodigo()).subscribe({
            next: (data) => {
                console.log("epale");
                this.negocios = data.respuesta;
            },
            error: (error) => {
                console.log("pailas");
                console.error(error);
            }
        });
    }

    public listarNegociosRechazados() {
        this.negocioService.listarNegociosPropietarioRechazados(this.tokenService.getCodigo()).subscribe({
            next: (data) => {
                console.log("epale");
                this.negociosRechazados = data.respuesta;
            },
            error: (error) => {
                console.log("pailas");
                console.error(error);
            }
        });
    }

}
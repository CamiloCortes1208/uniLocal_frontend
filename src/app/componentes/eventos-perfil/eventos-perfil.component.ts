import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemEventoDTO } from '../../dto/eventoDTO/item-evento-dto';
import { EventosService } from '../../servicios/eventos.service';
import { ItemNegocioDTO } from '../../dto/negocioDTO/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { AuthService } from '../../servicios/auth/auth.service';
import { TokenService } from '../../servicios/token/token.service';

@Component({
  selector: 'app-eventos-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eventos-perfil.component.html',
  styleUrl: './eventos-perfil.component.css'
})
export class EventosPerfilComponent {
  eventos: ItemEventoDTO[]
  negocios: ItemNegocioDTO[]

  constructor(private eventoServicio: EventosService, private negocioServicio: NegociosService, private tokenService: TokenService){
    this.eventos=[]
    this.negocios=[]
    this.listarNegocios()
    this.listarEventos()
  }
  
  public listarEventos(){
    this.negocios.forEach(element => {
      this.eventoServicio.listarEventosNegocio(element.codigoNegocio).subscribe({
        next: (data) => {
          this.eventos.push(data.respuesta)
        }
      })
    });
    
  }
  


  public listarNegocios() {
    this.negocioServicio.listarNegociosPropietario(this.tokenService.getCodigo()).subscribe({
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

}

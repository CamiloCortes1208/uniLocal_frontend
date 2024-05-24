import { Component } from '@angular/core';
import { ItemEventoDTO } from '../../dto/eventoDTO/item-evento-dto';
import { EventosService } from '../../servicios/eventos.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos: ItemEventoDTO[]

  constructor(private eventoServicio: EventosService){
    this.eventos = []
    this.listarNegocios()
    console.log(this.eventos)
  }

  public listarNegocios() {
    this.eventoServicio.listarEventos().subscribe({
        next: (data) => {
            console.log("epale");
            this.eventos = data.respuesta;
        },
        error: (error) => {
            console.log("pailas");
            console.error(error);
        }
    });
}


}

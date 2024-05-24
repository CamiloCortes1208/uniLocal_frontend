import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensajeDTO/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  
  private eventosURL = "https://unilocal-pa.onrender.com/api/clientes";

  constructor(private http: HttpClient) { }

  public listarEventos(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.eventosURL}/eventos/obtener-eventos`);
  }

  public listarEventosNegocio(codigoNegocio: string): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.eventosURL}/eventos/obtener-eventos-negocio/${codigoNegocio}`);
  }

}

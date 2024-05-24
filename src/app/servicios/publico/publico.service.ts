import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../../dto/mensajeDTO/mensaje-dto';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PublicoService {
  private publicoURL = "https://unilocal-pa.onrender.com/api/publica";
  constructor(private http: HttpClient) { }

  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-ciudades`);
  }

  public listarCategorias(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-categorias`);
  }
}
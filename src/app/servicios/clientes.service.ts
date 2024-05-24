import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensajeDTO/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private negociosURL = "https://unilocal-pa.onrender.com/api/clientes";


  constructor(private http: HttpClient) { 
    
  }

  public obtener(codigoCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/obtener/${codigoCliente}`);
  }
}

import { Injectable } from '@angular/core';
import { ItemNegocioDTO } from '../dto/negocioDTO/item-negocio-dto';
import { AgregarNegocioDTO } from '../dto/negocioDTO/agregar-negocio-dto';
import { Ubicacion } from '../dto/ubicacion';
import { Horario } from '../dto/horario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensajeDTO/mensaje-dto';
import { ActualizarNegocioDTO } from '../dto/negocioDTO/actualizar-negocio-dto';

@Injectable({
  providedIn: 'root'
})

export class NegociosService {

  private negociosURL = "http://localhost:8080/api/clientes";
  

  constructor(private http: HttpClient) {}

  public crear(negocioNuevo: AgregarNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.negociosURL}/crear`, negocioNuevo);
  }
  public actualizar(actualizarNegocio: ActualizarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.negociosURL}/actualizar`, actualizarNegocio);
  }
  public obtener(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/obtener/${codigoNegocio}`);
  }
  public eliminar(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.negociosURL}/eliminar/${codigoNegocio}`);
  }
  public listarNegociosPropietario(codigoCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/listar-negocios/${codigoCliente}`);
  }
  

}
import { Injectable } from '@angular/core';
import { AgregarNegocioDTO } from '../dto/negocioDTO/agregar-negocio-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensajeDTO/mensaje-dto';
import { ActualizarNegocioDTO } from '../dto/negocioDTO/actualizar-negocio-dto';

@Injectable({
  providedIn: 'root'
})

export class NegociosService {

  private negociosURL = "https://unilocal-pa.onrender.com/api/clientes";
  

  constructor(private http: HttpClient) {}

  public crear(negocioNuevo: AgregarNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.negociosURL}/agregar-negocio`, negocioNuevo);
  }
  public actualizar(actualizarNegocio: ActualizarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.negociosURL}/actualizar-negocio`, actualizarNegocio);
  }
  public obtener(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/obtener-negocio/${codigoNegocio}`);
  }
  public obtenerRechazado(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/obtener-negocio-rechazado/${codigoNegocio}`);
  }
  public eliminar(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.negociosURL}/eliminar-negocio/${codigoNegocio}`);
  }
  public listarNegociosPropietario(codigoCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/listar-negocios-propietario/${codigoCliente}`);
  }
  public listarNegociosPropietarioRechazados(codigoCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/listar-negocios-propietario-rechazados/${codigoCliente}`);
  }
  

}
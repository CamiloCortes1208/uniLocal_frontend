import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../../dto/loginDTO/login-dto';
import { RegistroClienteDTO } from '../../dto/clienteDTO/registro-cliente-dto';
import { MensajeDTO } from '../../dto/mensajeDTO/mensaje-dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "https://unilocal-pa.onrender.com/api/auth";
  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: RegistroClienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login-cliente`, loginDTO);
  }
}
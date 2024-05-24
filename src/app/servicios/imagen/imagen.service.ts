import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../../dto/mensajeDTO/mensaje-dto';
import { ImagenDTO } from '../../dto/imagenDTO/imagen-dto';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private imgURL = "https://unilocal-pa.onrender.com/api/imagenes";

  constructor(private http: HttpClient) { }

  public subir(imagen: FormData): Observable<MensajeDTO> {
    console.log("hola")
    return this.http.post<MensajeDTO>(`${this.imgURL}/subir`, imagen);
  }

  public eliminar(imagenDTO: ImagenDTO): Observable<MensajeDTO> {
    return this.http.request<MensajeDTO>('delete', `${this.imgURL}/eliminar`, {
      body: imagenDTO
    });
  }


}

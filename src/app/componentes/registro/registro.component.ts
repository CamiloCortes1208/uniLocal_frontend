import { Component } from '@angular/core';
import { RegistroClienteDTO } from '../../dto/clienteDTO/registro-cliente-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicoService } from '../../servicios/publico/publico.service';
import { AuthService } from '../../servicios/auth/auth.service';
import { ImagenService } from '../../servicios/imagen/imagen.service';
import { Alerta } from '../../dto/alerta'
import { AlertaComponent } from "../alerta/alerta.component";


@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  imports: [FormsModule, CommonModule, AlertaComponent]
})
export class RegistroComponent {
  registroClienteDTO: RegistroClienteDTO;
  ciudades: string[];
  archivos!: FileList;
  alerta!: Alerta;

  constructor(private publicoService: PublicoService, private authService: AuthService, private imagenService: ImagenService) {
    this.registroClienteDTO = new RegistroClienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  public registrar() {
    if (this.registroClienteDTO.fotoPerfil != "") {
      console.log(this.registroClienteDTO)
      this.authService.registrarCliente(this.registroClienteDTO).subscribe({
        next: (data) => {
          this.alerta = new Alerta(data.respuesta, "success");
        },
        error: (error) => {
          this.alerta = new Alerta(error.error.respuesta, "danger");
        }
      });
    } else {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
    }
  }

  public sonIguales(): boolean {
    return this.registroClienteDTO.password == this.registroClienteDTO.confirmarPassword;
  }
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroClienteDTO.fotoPerfil = this.archivos[0].name;
    }
  }

  private cargarCiudades() {
    this.publicoService.listarCiudades().subscribe({
      next: (data) => {
        this.ciudades = data.respuesta;
      },
      error: (error) => {
        console.log("Error al cargar las ciudades");
      }
    });
  }

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      
      

      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroClienteDTO.fotoPerfil = data.respuesta.url;
          this.alerta = new Alerta("Se ha subido la foto", "success");
        },
        error: error => {
          this.alerta = new Alerta(error.error, "danger");
        }
      });
    } else {

      console.log("Hola")
      this.alerta = new Alerta("Debe seleccionar una imagen y subirla", "danger");
    }
  } 

}

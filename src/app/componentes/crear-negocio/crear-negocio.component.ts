
import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router } from '@angular/router';
import { AgregarNegocioDTO } from '../../dto/negocioDTO/agregar-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { TokenService } from '../../servicios/token/token.service';
import { Alerta } from '../../dto/alerta';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicoService } from '../../servicios/publico/publico.service';
import { ImagenService } from '../../servicios/imagen/imagen.service';
import { Horario } from '../../dto/horario';
import { AlertaComponent } from "../alerta/alerta.component";

@Component({
    selector: 'app-crear-negocio',
    standalone: true,
    templateUrl: './crear-negocio.component.html',
    styleUrl: './crear-negocio.component.css',
    imports: [FormsModule, CommonModule, AlertaComponent]
})
export class CrearNegocioComponent implements OnInit {
  telefono: string = '';
  agregarNegocioDTO: AgregarNegocioDTO;
  alerta!: Alerta;
  categorias: string[];
  listaErrores: string[] = [];
  archivos!: FileList;
  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  horarios: { [dia: string]: Horario } = {};

  constructor(private mapaService: MapaService, private router: Router, private negocioService: NegociosService, private publicoService: PublicoService, private imagenService: ImagenService, private tokenService: TokenService) { 
    this.agregarNegocioDTO = new AgregarNegocioDTO();
    this.categorias = [];
    this.cargarCategorias();
    this.diasSemana.forEach(dia => {
      this.horarios[dia] = new Horario('', '', dia);
    });
  }
 
  public crear() {
    this.agregarNegocioDTO.codigoCliente = this.tokenService.getCodigo();
    console.log(this.agregarNegocioDTO)
    this.negocioService.crear(this.agregarNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
        this.listaErrores = [];
      
        if (Array.isArray(error.error.respuesta)) {
          error.error.respuesta.forEach((item: any) => {
            this.listaErrores.push(item.error);
          });
          const mensajeError = this.listaErrores.join(', ');
          console.log(error.error.respuesta);
          this.alerta = new Alerta(mensajeError, "danger");
        } 
      }
    });
  } 

  private cargarCategorias() {
    this.publicoService.listarCategorias().subscribe({
      next: (data) => {
        this.categorias = data.respuesta;
      },
      error: (error) => {
        console.log("Error al cargar las categorias");
      }
    });
  }


  
  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.agregarNegocioDTO.ubicacion.latitud = marcador.lat;
      this.agregarNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          console.log(this.agregarNegocioDTO)
          this.agregarNegocioDTO.listaImagenesNegocio.push(data.respuesta.url);
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

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }

  public agregarTelefono() {
    if (this.telefono) {
      this.agregarNegocioDTO.listaTelefonos.push(this.telefono);
      this.telefono = ''; // Limpia el campo de entrada después de agregar
    }
  }

  eliminarTelefono(index: number) {
    this.agregarNegocioDTO.listaTelefonos.splice(index, 1);
  }

  toggleDia(dia: string) {
    if (this.horarios[dia].horaApertura || this.horarios[dia].horaCierre) {
      this.horarios[dia].horaApertura = '';
      this.horarios[dia].horaCierre = '';
    } else {
      this.horarios[dia].horaApertura = '00:00';
      this.horarios[dia].horaCierre = '00:00';
    }
    this.actualizarListaHorarios();
  }

  actualizarListaHorarios() {
    this.agregarNegocioDTO.listaHorarios = Object.values(this.horarios).filter(horario => horario.horaApertura && horario.horaCierre);
  }

}

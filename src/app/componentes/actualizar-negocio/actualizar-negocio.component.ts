import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../servicios/negocios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleNegocioDTO } from '../../dto/negocioDTO/detalle-negocio-dto';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from "../alerta/alerta.component";
import { MapaService } from '../../servicios/mapa.service';
import { ActualizarNegocioDTO } from '../../dto/negocioDTO/actualizar-negocio-dto';
import { Horario } from '../../dto/horario';
import { PublicoService } from '../../servicios/publico/publico.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImagenService } from '../../servicios/imagen/imagen.service';
import { TokenService } from '../../servicios/token/token.service';

@Component({
    selector: 'app-actualizar-negocio',
    standalone: true,
    templateUrl: './actualizar-negocio.component.html',
    styleUrl: './actualizar-negocio.component.css',
    imports: [FormsModule, CommonModule, AlertaComponent]
})
export class ActualizarNegocioComponent implements OnInit{
  telefono: string = '';
  negocioId!: string;
  detalleNegocioDTO: DetalleNegocioDTO
  alerta!: Alerta
  actualizarNegocioDTO: ActualizarNegocioDTO
  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  horarios: { [dia: string]: Horario } = {};
  categorias: string[];
  archivos!: FileList;
  listaErrores: string[] = [];

  constructor(private route: ActivatedRoute, private negocioService: NegociosService, private router: Router, private mapaService: MapaService, private publicoService: PublicoService, private imagenService: ImagenService, private tokenService: TokenService){
      this.categorias = [];
      this.cargarCategorias();
      this.detalleNegocioDTO = new DetalleNegocioDTO();
      this.actualizarNegocioDTO = new ActualizarNegocioDTO();
      this.diasSemana.forEach(dia => {
        this.horarios[dia] = new Horario('', '', dia);
      });  
    }

    public actualizar() {
      console.log(this.actualizarNegocioDTO)
      this.negocioService.actualizar(this.actualizarNegocioDTO).subscribe({
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
  

  ngOnInit(): void {
    this.negocioId = this.route.snapshot.paramMap.get('id')!;
    this.obtener(this.negocioId)
    
    
    

    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.actualizarNegocioDTO.ubicacion.latitud = marcador.lat;
      this.actualizarNegocioDTO.ubicacion.longitud = marcador.lng;
    });

  }
  
  public obtener(id: string){
    this.negocioService.obtener(id).subscribe({
      next: (data) => {
        this.detalleNegocioDTO = data.respuesta

        this.actualizarNegocioDTO.codigoCliente = this.tokenService.getCodigo();
        this.actualizarNegocioDTO.codigoNegocio = this.detalleNegocioDTO.codigoNegocio
        this.actualizarNegocioDTO.nombreNegocio = this.detalleNegocioDTO.nombre
        this.actualizarNegocioDTO.descripcion = this.detalleNegocioDTO.descripcion
        this.actualizarNegocioDTO.categoriaNegocio = this.detalleNegocioDTO.categoriaNegocio
        this.actualizarNegocioDTO.listaImagenesNegocio = this.detalleNegocioDTO.listaRutasImagenes
        this.actualizarNegocioDTO.listaTelefonos = this.detalleNegocioDTO.listaTelefonos

        console.log(this.actualizarNegocioDTO)
      },
      error: (error) => {
          console.log("pailas");
          
          console.error(error);
          
          this.negocioService.obtenerRechazado(id).subscribe({
            next: (data) => {
              this.detalleNegocioDTO = data.respuesta

            this.actualizarNegocioDTO.codigoCliente = this.tokenService.getCodigo();
            this.actualizarNegocioDTO.codigoNegocio = this.detalleNegocioDTO.codigoNegocio
            this.actualizarNegocioDTO.nombreNegocio = this.detalleNegocioDTO.nombre
            this.actualizarNegocioDTO.descripcion = this.detalleNegocioDTO.descripcion
            this.actualizarNegocioDTO.categoriaNegocio = this.detalleNegocioDTO.categoriaNegocio
            this.actualizarNegocioDTO.listaImagenesNegocio = this.detalleNegocioDTO.listaRutasImagenes
            this.actualizarNegocioDTO.listaTelefonos = this.detalleNegocioDTO.listaTelefonos

            console.log(this.actualizarNegocioDTO)
            },
            error: (error) =>{
              console.log("pailas")
              console.log(error)
            }
          })
          //this.alerta = new Alerta(error.error, "danger");
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

  actualizarListaHorarios() {
    this.actualizarNegocioDTO.listaHorarios = Object.values(this.horarios).filter(horario => horario.horaApertura && horario.horaCierre);
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

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          console.log(this.actualizarNegocioDTO)
          this.actualizarNegocioDTO.listaImagenesNegocio.push(data.respuesta.url);
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
      this.actualizarNegocioDTO.listaTelefonos.push(this.telefono);
      this.telefono = ''; // Limpia el campo de entrada después de agregar
    }
  }

  eliminarTelefono(index: number) {
    this.detalleNegocioDTO.listaTelefonos.splice(index, 1);
  }

}

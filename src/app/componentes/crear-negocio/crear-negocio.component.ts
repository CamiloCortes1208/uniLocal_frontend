import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router } from '@angular/router';
import { AgregarNegocioDTO } from '../../dto/negocioDTO/agregar-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { TokenService } from '../../servicios/token/token.service';
import { Alerta } from '../../dto/alerta';

@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [],
  templateUrl: './crear-negocio.component.html',
  styleUrl: './crear-negocio.component.css'
})
export class CrearNegocioComponent implements OnInit {

  registroNegocioDTO: AgregarNegocioDTO;
  alerta!: Alerta;

  constructor(private mapaService: MapaService, private router: Router, private negocioService: NegociosService) { 
    this.registroNegocioDTO = new AgregarNegocioDTO();
  }
 
  private crear(registroNegocioDTO: AgregarNegocioDTO) {
    this.negocioService.crear(registroNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }

}

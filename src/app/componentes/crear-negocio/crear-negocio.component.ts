import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router } from '@angular/router';
import { RegistroNegocioDTO } from '../../dto/registro-negocio-dto';

@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [],
  templateUrl: './crear-negocio.component.html',
  styleUrl: './crear-negocio.component.css'
})
export class CrearNegocioComponent implements OnInit {

  registroNegocioDTO: RegistroNegocioDTO;

  constructor(private mapaService: MapaService, private router: Router) { 
    this.registroNegocioDTO = new RegistroNegocioDTO();
  }
  
  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }
}

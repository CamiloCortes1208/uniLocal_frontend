import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router } from '@angular/router';
import { LocationInfoComponent } from "../location-info/location-info.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [LocationInfoComponent]
})
export class InicioComponent implements OnInit {

  constructor(private mapaService: MapaService, private router: Router) { }

  ngOnInit(): void {
    this.mapaService.crearMapa();
  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["/busqueda", valor]);
    }
  }

}

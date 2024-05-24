import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from "../alerta/alerta.component";
import { DetalleNegocioDTO } from '../../dto/negocioDTO/detalle-negocio-dto';

@Component({
    selector: 'app-eliminar-negocio',
    standalone: true,
    templateUrl: './eliminar-negocio.component.html',
    styleUrl: './eliminar-negocio.component.css',
    imports: [AlertaComponent]
})
export class EliminarNegocioComponent implements OnInit {
  negocioId!: string;
  alerta!: Alerta;
  detalleNegocioDTO!: DetalleNegocioDTO


  constructor(
    private route: ActivatedRoute,
    private negocioService: NegociosService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    this.negocioId = this.route.snapshot.paramMap.get('id')!;
    this.obtener(this.negocioId)
  }

  public eliminar(){
    this.negocioService.eliminar(this.negocioId).subscribe({
      next: (data) => {
        
      },
      error: (error) => {
          console.log("pailas");
          console.error(error);
          this.alerta = new Alerta(error.error, "danger");
      }
  });
  }

  public obtener(id: string){
    this.negocioService.obtener(id).subscribe({
      next: (data) => {
        this.detalleNegocioDTO = data.respuesta
      },
      error: (error) => {
          console.log("pailas");
          console.error(error);
          this.alerta = new Alerta(error.error, "danger");
      }
  });
  }

  public volver(){
    this.router.navigate(['/negocios-perfil']);
  }


}

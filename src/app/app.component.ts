import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./componentes/footer/footer.component";
import { NegociosPerfilComponent } from './componentes/negocios-perfil/negocios-perfil.component';
import { TokenService } from './servicios/token/token.service';
import { DetalleClienteDTO } from './dto/clienteDTO/detalle-cliente-dto';
import { ClientesService } from './servicios/clientes.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, FooterComponent, NegociosPerfilComponent]
})
export class AppComponent {
  detalleClienteDTO: DetalleClienteDTO
  fotoPerfil: string =''
  title = 'uniLocal_frontend';
  isLogged = false;
  email: string = '';
  footer: string = 'Universidad del Quindío - 2024-1';

  constructor(private tokenService: TokenService, private clienteService: ClientesService, private router: Router) {
    this.detalleClienteDTO = new DetalleClienteDTO()
   }
  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      this.email = this.tokenService.getEmail();
    }
  }
  public logout() {
    this.tokenService.logout();
  }

  public obtenerCliente() {
    if(this.isLogged){
      this.clienteService.obtener(this.tokenService.getCodigo()).subscribe({
        next: (data) => {
          this.detalleClienteDTO = data.respuesta
          this.fotoPerfil = this.detalleClienteDTO.fotoPerfil
        },
        error: (error) =>{
          console.log(error.error)
        }
      })
    }else{
      this.fotoPerfil="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg"
    }
  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["/busqueda", valor]);
    }
  }

}

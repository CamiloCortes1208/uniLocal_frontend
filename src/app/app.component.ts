import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { MenuDesplegableComponent } from "./componentes/menu-desplegable/menu-desplegable.component";
import { NegociosPerfilComponent } from './componentes/negocios-perfil/negocios-perfil.component';
import { HeaderClienteComponent } from "./componentes/header-cliente/header-cliente.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent, MenuDesplegableComponent, NegociosPerfilComponent, HeaderClienteComponent]
})
export class AppComponent {
  title = 'uniLocal_frontend';
  footer = 'Universidad del Quindío - 2024-1';
}

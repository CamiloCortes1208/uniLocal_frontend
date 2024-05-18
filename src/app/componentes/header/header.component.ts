import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuDesplegableComponent } from "../menu-desplegable/menu-desplegable.component";
import { NegociosPerfilComponent } from '../negocios-perfil/negocios-perfil.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterOutlet, RouterModule, MenuDesplegableComponent,NegociosPerfilComponent]
})
export class HeaderComponent {
  title = 'uniLocal_frontend';
}

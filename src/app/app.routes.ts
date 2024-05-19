import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NegociosPerfilComponent } from './componentes/negocios-perfil/negocios-perfil.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';
import { VerPerfilComponent } from './componentes/ver-perfil/ver-perfil.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { SitiosDestacadosComponent } from './componentes/sitios-destacados/sitios-destacados.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EventosPerfilComponent } from './componentes/eventos-perfil/eventos-perfil.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { NegociosPerfilModeradorComponent } from './componentes/negocios-perfil-moderador/negocios-perfil-moderador.component';
import { RechazarNegocioComponent } from './componentes/rechazar-negocio/rechazar-negocio.component';
import { EliminarNegocioComponent } from './componentes/eliminar-negocio/eliminar-negocio.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'sitios-destacados', component: SitiosDestacadosComponent},
    { path: 'eventos', component: EventosComponent},
    { path: 'login', component: LoginComponent },
    { path: 'recuperar-password', component: RecuperarPasswordComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'perfil', component: VerPerfilComponent},
    { path: 'negocios-perfil', component: NegociosPerfilComponent},
    { path: 'crear-negocio', component: CrearNegocioComponent},
    { path: 'eliminar-negocio', component: EliminarNegocioComponent},
    { path: 'eventos-perfil', component: EventosPerfilComponent},
    { path: 'crear-evento', component: CrearEventoComponent},
    { path: 'negocios-perfil-moderador', component: NegociosPerfilModeradorComponent},
    { path: 'rechazar-negocio', component: RechazarNegocioComponent},
    { path: "**", pathMatch: "full", redirectTo: "" },
    { path: "busqueda/:texto", component: BusquedaComponent }
];

import { RouterModule, Routes } from '@angular/router';
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
import { RestablecerPasswordComponent } from './componentes/restablecer-password/restablecer-password.component';
import { EliminarPerfilComponent } from './componentes/eliminar-perfil/eliminar-perfil.component';
import { ActualizarNegocioComponent } from './componentes/actualizar-negocio/actualizar-negocio.component';
import { LoginGuard } from './servicios/permiso/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { NgModule } from '@angular/core';
import { MuroComponent } from './componentes/muro/muro.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'sitios-destacados', component: SitiosDestacadosComponent},
    { path: 'eventos', component: EventosComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"]}},
    { path: 'login', component: LoginComponent },
    { path: 'recuperar-password', component: RecuperarPasswordComponent},
    { path: 'restablecer-password', component: RestablecerPasswordComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'perfil', component: VerPerfilComponent},
    { path: 'eliminar-perfil/:id', component: EliminarPerfilComponent},
    { path: 'negocios-perfil', component: NegociosPerfilComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] }},
    { path: 'crear-negocio', component: CrearNegocioComponent, canActivate: [RolesGuard], data: {
        expectedRole: ["CLIENTE"] } },
    { path: 'actualizar-negocio/:id', component: ActualizarNegocioComponent},
    { path: 'eliminar-negocio/:id', component: EliminarNegocioComponent},
    { path: 'eventos-perfil', component: EventosPerfilComponent},
    { path: 'crear-evento', component: CrearEventoComponent},
    { path: 'negocios-perfil-moderador', component: NegociosPerfilModeradorComponent, canActivate: [RolesGuard], data: { 
        expectedRole: ["MODERADOR"] } },
    { path: 'rechazar-negocio', component: RechazarNegocioComponent},
    { path: "**", pathMatch: "full", redirectTo: "" },
    { path: "busqueda/:texto", component: BusquedaComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    { path: 'muro', component: MuroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
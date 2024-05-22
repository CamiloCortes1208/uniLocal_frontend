import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDTO } from '../../dto/loginDTO/login-dto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../servicios/auth/auth.service'
import { TokenService } from '../../servicios/token/token.service';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from "../alerta/alerta.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, CommonModule, RouterModule, AlertaComponent]
})
export class LoginComponent {
  loginDTO: LoginDTO;
  alerta!: Alerta;

  constructor(private authService: AuthService, private tokenService: TokenService ) {
    this.loginDTO = new LoginDTO();
  }

  public login() {
    this.authService.loginCliente(this.loginDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });
  }
}

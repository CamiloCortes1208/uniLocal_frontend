import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDTO } from '../../dto/login-dto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDTO: LoginDTO;

  constructor() {
    this.loginDTO = new LoginDTO();
  }

  public ingresar() {
    //aqui va el codigo para las validaciones del login
    console.log(this.loginDTO);
  }
}

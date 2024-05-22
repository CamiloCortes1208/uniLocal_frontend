import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../servicios/token/token.service';

@Component({
  selector: 'app-header-cliente',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.css'
})
export class HeaderClienteComponent {

    constructor(private tokenService: TokenService){}

    public logout(){
      this.tokenService.logout()
    }
}

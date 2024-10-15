import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username?: string;
  password?: string;
  loginError?: boolean;
  cadastrando?: boolean;

  constructor(
    private router: Router
  ) {}

  public onSubmit() {
    console.log(`Usuario: ${this.username}, Pass: ${this.password}`);

    this.router.navigate(['/home']);
  }

  public prepararCadastro(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.cadastrando = true;
  }

  public cancelarCadastro() {
    this.cadastrando = false;
  }
}

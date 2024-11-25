import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Usuario } from '../../shared/model/usuario';

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
  mensagemSucesso?: string | null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public onSubmit() {
    this.router.navigate(['/login']);
  }

  public prepararCadastro(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.cadastrando = true;
  }

  public cancelarCadastro(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.cadastrando = false;
    this.mensagemSucesso = null;
    this.loginError = false;
  }

  public cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
          this.loginError = false;
        }, error => {
          this.loginError = true;
          this.mensagemSucesso = null;
        })
  }
}

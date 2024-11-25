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
  username!: string;
  password!: string;
  cadastrando?: boolean;
  mensagemSucesso?: string | null;
  errors?: String[];

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  public onSubmit() {
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        (errorResponse) => {
          this.errors = ['Usuário e/ou senha inválido(s).'];
        }
    );
  }

  public prepararCadastro(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.cadastrando = true;
  }

  public cancelarCadastro(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.cadastrando = false;
    this.mensagemSucesso = null;
  }

  public cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario).subscribe(
      (response) => {
        this.mensagemSucesso =
          'Cadastro realizado com sucesso! Efetue o login.';
        this.cadastrando = false;
        this.username = '';
        this.password = '';
        this.errors = [];
      },
      (errorResponse) => {
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}

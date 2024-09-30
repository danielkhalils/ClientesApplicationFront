import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../shared/model/cliente.model';
import { ClientesService } from '../../../shared/services/clientes.service';
import { ServicoPrestado } from '../../../shared/model/servicoPrestado';
import { ServicoPrestadoService } from '../../../shared/services/servico-prestado.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css',
})
export class ServicoPrestadoFormComponent implements OnInit {
  clientes: Cliente[] = [];
  sucesso?: boolean = false;
  errors?: String[];
  servico: ServicoPrestado;
  id?: number;

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe((response) => (this.clientes = response));
  }

  public saveOrUpdate() {
    if (this.id) {
      //Atualizar serviço
      this.servicoPrestadoService.atualizar(this.servico!).subscribe(
        (response) => {
          this.sucesso = true;
          this.errors = [];
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar o serviço.'];
        }
      );
    } else {
      //Salvar serviço
      this.servicoPrestadoService
        .salvar(this.servico!)
        .subscribe( response => {
          this.sucesso = true;
          this.errors = [];
          this.servico = new ServicoPrestado();
        }, errorResponse => {
          this.sucesso = false;
          this.errors = errorResponse.error.errors;
        })
    }
  }

  public voltar() {
    this.router.navigate(['/servico-prestado-list']);
  }

  public findById(){
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.servicoPrestadoService
          .getServicoById(this.id)
          .subscribe(
            response => this.servico = response,
            errorResponse => this.servico = new ServicoPrestado()
          )
      }
    })
  }
}

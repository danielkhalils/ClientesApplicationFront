import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../shared/model/cliente.model';
import { ClientesService } from '../../../shared/services/clientes.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  standalone: false,
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit{

  cliente?: Cliente;
  sucesso?: boolean = false;
  errors?: String[];
  id?: number;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.findById();
  }

  saveOrUpdate(){
    if(this.id){
      //Atualizar Cliente
      this.clienteService
        .atualizar(this.cliente!)
        .subscribe( response => {
          this.sucesso = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })
    }else {
      //Salva Cliente
      this.clienteService
        .salvar(this.cliente!)
        .subscribe( response => {
          this.sucesso = true;
          this.errors = [];
          this.cliente = response;
        }, errorResponse => {
          this.sucesso = false;
          this.errors = errorResponse.error.errors;
        })
    }
  }

  public voltar(){
    this.router.navigate(['/clientes-list'])
  }

  public findById(){
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.clienteService
          .getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
          )
      }
    })
  }
}

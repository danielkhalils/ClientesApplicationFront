import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../shared/model/cliente.model';
import { ClientesService } from '../../../shared/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit{

  clientes?: Cliente[] = [];

  constructor(
    private clienteService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.clienteService
      .getClientes()
      .subscribe( resposta => this.clientes = resposta);
  }

  public novoCadastro(){
    this.router.navigate(['/clientes-form']);
  }

}

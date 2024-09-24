import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../shared/model/cliente.model';
import { ClientesService } from '../../../shared/services/clientes.service';
import { ServicoPrestado } from '../../../shared/model/servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css',
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes?: Cliente[] = [];
  servicoPrestado?: ServicoPrestado;

  constructor(
    private clienteService: ClientesService
  ) {
    this.servicoPrestado = new ServicoPrestado;
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe( response => this.clientes = response )
  }

  onSubmit() {
    console.log(this.servicoPrestado);
    
  }

}

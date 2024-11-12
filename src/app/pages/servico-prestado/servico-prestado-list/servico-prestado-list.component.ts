import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from '../../../shared/model/servicoPrestadoBusca';
import { ServicoPrestadoService } from '../../../shared/services/servico-prestado.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrl: './servico-prestado-list.component.css',
})
export class ServicoPrestadoListComponent implements OnInit {
  nome!: string;
  mes!: number;
  meses: number[];
  lista?: ServicoPrestadoBusca[];
  message?: string | null;

  constructor(
    private service: ServicoPrestadoService,
    private router: Router
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {}

  public consultar() {

    this.service
      .buscar(this.nome, this.mes)
      .subscribe(response => { 
        this.lista = response;
        if(this.lista!.length <= 0){
          this.message = "Nenhum registro encontrado.";
        } else {
          this.message = null;
        }
    });
  }

  public novoCadastro() {
    this.router.navigate(['/servico-prestado/form']);
  }
} 

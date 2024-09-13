import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) {}


  salvar( cliente : Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.cliente}`, cliente);
  }

  getClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.cliente}`);
  }
  getClienteById(id: number) : Observable<Cliente>{
    return this.http.get<any>(`${environment.cliente}/${id}`)
  }

}

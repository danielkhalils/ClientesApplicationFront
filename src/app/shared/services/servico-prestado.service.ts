import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from '../model/servicoPrestado';
import { environment } from '../../environments/environment';
import { ServicoPrestadoBusca } from '../model/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(`${environment.servicoPrestado}`, servicoPrestado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{

    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ? mes.toString() : '');
    
    const url = environment.servicoPrestado + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

  atualizar(servicoPrestado: ServicoPrestado) : Observable<any>{
    return this.http.put<ServicoPrestado>(`${environment.servicoPrestado}/${servicoPrestado.idCliente}`, servicoPrestado)
  }

  getServicoById(id: number) : Observable<ServicoPrestado>{
    return this.http.get<ServicoPrestado>(`${environment.servicoPrestado}/${id}`)
  }

}

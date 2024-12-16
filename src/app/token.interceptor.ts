import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Intercepta todas as requisicoes HTTP para checar se tem o token e, se tiver, add no header 

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //pegando o token do localStorage
    const tokenString = localStorage.getItem("access_token");

    const url = request.url;

    //Verificando se tem token, se tiver e a request nao for para pegar o token, add no header.
    //Se a request for para pegar o token, ela tem as credencias da app no header
    if(tokenString && !url.endsWith("oauth/token")){
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;

      //Adicionado o token no header, bem verboso.
      request = request.clone({
        setHeaders:{
          Authorization: "Bearer " + jwt
        }
      })
    }
    
    //Passa a request para frente
    return next.handle(request);
  }
}
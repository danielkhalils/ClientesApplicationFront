import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../model/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.apiURLBase+"/api/usuarios";
  private TOKEN_URL = environment.apiURLBase + environment.TOKEN_URL;
  //Para fazer um injecao de depedencia do JwtHelperService e necessario um provider dele
  //Entao estou instanciado aqui mesmo que e mais simples
  private jwtHelperService = new JwtHelperService();

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.API_URL, usuario);
  }

  login(username: string, password: string): Observable<any>{

    //Para a app se autenticar no servidor, sera criptografado.
    const clientId = environment.clientId;
    const clientSecret = environment.clientSecret;

    const headers = {
      'Authorization': "Basic " + btoa(`${clientId}:${clientSecret}`),
      'Content-Type': "application/x-www-form-urlencoded"
    };
   
    const params = new HttpParams()
                          .set("username", username)
                          .set("password", password)
                          .set("grant_type", "password");

    return this.httpClient.post<any>(this.TOKEN_URL, params.toString(), {headers});
    
  }

  logout(){
    localStorage.removeItem("access_token");
    this.router.navigate(['/login']);
  }

  getUsername(){
    const token = this.getToken();
    let username;

    if(token){
      username = this.jwtHelperService.decodeToken(token).user_name;
    }

    return username;
  }

  //Verifica se o user esta autenticado
  isAutheticated(): boolean{

    const token = this.getToken();

    //Caso tenha token, verificando se ele nao esta expirado
    if(token){
      //True para expirado e false para nao, entao e so eu retornar o inverso disso.
      const expired = this.jwtHelperService.isTokenExpired(token);
      return !expired;
    }

    //Se nem tem token, entao nao esta autenticado
    return false;

  }

  getToken(){
    const tokenString = localStorage.getItem("access_token");

    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }

    return null;
  }
}
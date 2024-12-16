import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './template/home/home.component';
import { ClientesModule } from './pages/clientes/clientes.module';
import { ClientesService } from './shared/services/clientes.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicoPrestadoModule } from './pages/servico-prestado/servico-prestado.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClientesModule,
    FormsModule,
    HttpClientModule,
    ServicoPrestadoModule,
    TemplateModule,
  ],
  providers: [
    ClientesService,
    HttpClient,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

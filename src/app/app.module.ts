import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './template/home/home.component';
import { ClientesModule } from './pages/clientes/clientes.module';
import { ClientesService } from './shared/services/clientes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    HttpClientModule
  ],
  providers: [
    ClientesService,
    HttpClient
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

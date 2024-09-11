import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  declarations: [
    ClientesFormComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
  ]
})
export class ClientesModule { }

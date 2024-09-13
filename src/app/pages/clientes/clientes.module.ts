import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule } from '@angular/forms';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesListComponent,
  ],
  imports: [
    ClientesRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ClientesFormComponent,
    ClientesListComponent
  ]
})
export class ClientesModule { }

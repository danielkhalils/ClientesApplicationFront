import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { LayoutComponent } from '../../template/layout/layout.component';

const routes: Routes = [
  { path: 'servico-prestado', component: LayoutComponent, children: [
    { path: 'form', component: ServicoPrestadoFormComponent },
    { path: 'list', component: ServicoPrestadoListComponent },
    { path: 'id', component: ServicoPrestadoFormComponent },
    { path: '', redirectTo: '/servico-prestado/list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }

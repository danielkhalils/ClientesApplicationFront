import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class TemplateModule { }

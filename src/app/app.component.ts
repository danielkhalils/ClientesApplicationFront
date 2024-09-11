import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import jQuery from 'jquery';
import { HomeComponent } from './template/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, HomeComponent],
})
export class AppComponent implements AfterViewInit {
  title = 'ClientesApplicationFront';

  ngAfterViewInit(): void {
    this.actionMenuButton();
  }

  actionMenuButton() {
    // Use 'strict' mode for self-invoking function
    'use strict';

    // Add active state to sidebar nav links
    const path = window.location.href; // 'href' property of the DOM element is the absolute path

    $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function () {
      // Use type assertion to tell TypeScript that 'this' is an HTMLAnchorElement
      const link = this as HTMLAnchorElement;
      if (link.href === path) {
        $(link).addClass('active');
      }
    });

    // Toggle the side navigation
    $('#sidebarToggle').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sb-sidenav-toggled');
    });
  }
}

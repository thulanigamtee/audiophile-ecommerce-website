import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks: { name: string; path: string }[] = [
    { name: 'home', path: '' },
    { name: 'headphones', path: 'headphones' },
    { name: 'speakers', path: 'speakers' },
    { name: 'earphones', path: 'earphones' },
  ];
}

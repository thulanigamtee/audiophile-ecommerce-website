import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
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

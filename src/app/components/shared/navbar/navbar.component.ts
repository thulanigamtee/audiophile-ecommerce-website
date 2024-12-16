import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    CartComponent,
    MobileMenuComponent,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks: { name: string; path: string }[] = [
    { name: 'home', path: '/' },
    { name: 'headphones', path: 'headphones' },
    { name: 'speakers', path: 'speakers' },
    { name: 'earphones', path: 'earphones' },
  ];

  isMobileMenuActive: boolean = false;
  @ViewChild(MobileMenuComponent) mobileMenuComponent!: MobileMenuComponent;
  toggleMobileMenu(event: Event) {
    this.mobileMenuComponent.toggleMobileMenu(event);
  }

  @ViewChild(CartComponent) cartComponent!: CartComponent;
  toggleCart(event: Event) {
    this.cartComponent.toggleCart(event);
  }
}

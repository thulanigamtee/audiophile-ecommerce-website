import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, CartComponent, MobileMenuComponent],
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
  toggleMobileMenu() {
    this.mobileMenuComponent.toggleMobileMenu();
  }

  @ViewChild(CartComponent) cartComponent!: CartComponent;
  toggleCart(event: Event) {
    this.cartComponent.toggleCart(event);
  }
}

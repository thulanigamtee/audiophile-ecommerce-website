import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, CartComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks: { name: string; path: string }[] = [
    { name: 'home', path: '' },
    { name: 'headphones', path: 'headphones' },
    { name: 'speakers', path: 'speakers' },
    { name: 'earphones', path: 'earphones' },
  ];

  isActive: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe(['(min-width:768px']).subscribe(() => {
      if (this.isActive) this.isActive = false;
    });
  }

  toggleMobileMenu() {
    this.isActive = !this.isActive;
  }

  @ViewChild(CartComponent) cartComponent!: CartComponent;
  toggleCart() {
    this.cartComponent.toggleCart();
  }
}

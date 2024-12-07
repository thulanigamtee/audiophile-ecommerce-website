import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartComponent } from '../cart/cart.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, CartComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private destroy$ = new Subject<void>();

  navLinks: { name: string; path: string }[] = [
    { name: 'home', path: '' },
    { name: 'headphones', path: 'headphones' },
    { name: 'speakers', path: 'speakers' },
    { name: 'earphones', path: 'earphones' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width:768px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isNavActive) this.isNavActive = false;
      });
  }

  isNavActive: boolean = false;
  toggleMobileMenu() {
    this.isNavActive = !this.isNavActive;
  }

  @ViewChild(CartComponent) cartComponent!: CartComponent;
  toggleCart() {
    this.cartComponent.toggleCart();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

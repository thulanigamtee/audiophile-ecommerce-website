import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../models/cartItem.interface';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  private destroy$ = new Subject<void>();

  isCartActive: boolean = false;

  toggleCart() {
    this.isCartActive = !this.isCartActive;
  }

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartSubject$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.totalPrice = this.cartService.totalPrice;
      },
    });
  }

  removeCartItem(item: CartItem): void {
    if (item.quantity === 1) {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.product.slug !== item.product.slug
      );
    } else {
      item.quantity--;
    }
    this.cartService.updateCart(this.cartItems);
  }

  addCartItem(item: CartItem) {
    item.quantity++;
    this.cartService.updateCart(this.cartItems);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  goToCheckout() {
    this.router.navigate(['/', 'checkout']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

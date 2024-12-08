import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../models/cartItem.interface';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../button/button.component';

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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartSubject$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.totalPrice = this.cartService.totalPrice;
      },
    });
  }

  removeCartItem(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      // Remove the item entirely if quantity is 1
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.product.slug !== item.product.slug
      );
    }
    this.cartService.updateCart(); // Save changes
  }

  addCartItem(item: CartItem) {
    item.quantity++;
    this.cartService.updateCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from '../cart-items/cart-items.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemsComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  isCartActive: boolean = false;
  toggleCart() {
    this.isCartActive = !this.isCartActive;
  }
}

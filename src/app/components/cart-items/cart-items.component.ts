import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem.interface';
import { CartService } from '../../services/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cart-items',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cart-items.component.html',
})
export class CartItemsComponent {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  private destroy$ = new Subject<void>();

  @Input() isCart!: boolean;
  @Input() label!: string;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.totalPrice = this.cartService.totalPrice;
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

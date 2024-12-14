import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../models/cartItem.interface';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { OutsideClickDirective } from '../../../directives/outside-click.directive';
import { OverlayService } from '../../../services/overlay.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ButtonComponent, OutsideClickDirective],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private cartService: CartService,
    private router: Router,
    private overlayService: OverlayService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.cartService.cart$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.totalPrice = this.cartService.totalPrice;
      },
    });
    this.cartService.cartState$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (state) => {
        this.isCartActive = state;
      },
    });
  }

  isCartActive: boolean = false;
  toggleCart(event: Event) {
    event.stopPropagation();
    this.cartService.cartState = !this.cartService.cartState;
    this.overlayService.overlayState = !this.overlayService.overlayState;
  }

  handleOutsideClick() {
    if (this.cartService.cartState) {
      this.cartService.cartState = false;
      this.overlayService.overlayState = false;
    }
  }

  removeCartItem(item: CartItem): void {
    if (item.quantity === 1) {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.product.slug !== item.product.slug
      );
      this.toastService.displayToastMessage(
        `${item.product.nickName} removed from cart`
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
    this.router.navigate(['checkout']);
    this.overlayService.overlayState = false;
    this.cartService.cartState = false;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cartItem.interface';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private readonly CART_STORAGE_KEY = 'cartData';

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cartSubject$ = this.cartSubject.asObservable();

  private cartStateSubject = new BehaviorSubject<boolean>(false);
  cartStateSubject$ = this.cartStateSubject.asObservable();

  constructor() {
    this.loadCartFromStorage();
  }

  get cartState() {
    return this.cartStateSubject.value;
  }

  set cartState(state: boolean) {
    this.cartStateSubject.next(state);
  }

  private saveCartToStorage(): void {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.cart));
  }

  private loadCartFromStorage(): void {
    const storedCart = localStorage.getItem(this.CART_STORAGE_KEY);
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cartSubject.next(this.cart);
    }
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(
      (item) => item.product.slug === product.slug
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }

    this.cartSubject.next(this.cart);
    this.saveCartToStorage();
  }

  get CartItems(): CartItem[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);
    this.saveCartToStorage();
  }

  get totalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  updateCart(cartItems: CartItem[]): void {
    this.cart = cartItems;
    this.cartSubject.next(this.cart);
    this.saveCartToStorage();
  }
}

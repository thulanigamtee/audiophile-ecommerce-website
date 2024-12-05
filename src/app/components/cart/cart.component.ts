import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem.interface';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CartItemsComponent } from '../cart-items/cart-items.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemsComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {}

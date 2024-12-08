import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cartItem.interface';
import { Subject, takeUntil } from 'rxjs';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-summary',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  summaryItems: CartItem[] = [];
  totalPrice: number = 0;
  private destroy$ = new Subject<void>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartSubject$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.summaryItems = items;
        this.totalPrice = this.cartService.totalPrice;
      },
    });
  }

  summaryInformation = [
    { name: 'total', amount: '' },
    { name: 'shipping', amount: 50 },
    { name: 'vat (included)', amount: 1079 },
    { name: 'grand total', amount: this.totalPrice + 50 },
  ];
}

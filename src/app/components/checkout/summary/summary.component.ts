import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cartItem.interface';
import { Subject, takeUntil } from 'rxjs';
import { ButtonComponent } from '../../shared/button/button.component';
import { ModalService } from '../../../services/modal.service';
import { OverlayService } from '../../../services/overlay.service';

@Component({
  selector: 'app-summary',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  summaryItems: CartItem[] = [];
  summaryInformation: { name: string; amount: number }[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    public cartService: CartService,
    private modalService: ModalService,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    this.cartService.cart$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.summaryItems = items;
        const shippingFee = 50;
        const vat = (this.cartService.totalPrice * 20) / 100; // 20%
        this.summaryInformation = [
          { name: 'total', amount: this.cartService.totalPrice },
          { name: 'shipping', amount: shippingFee },
          {
            name: 'vat (included)',
            amount: vat,
          },
          {
            name: 'grand total',
            amount: this.cartService.totalPrice + shippingFee,
          },
        ];
      },
    });
  }

  showModal() {
    this.modalService.modalState = true;
    this.overlayService.overlayState = true;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

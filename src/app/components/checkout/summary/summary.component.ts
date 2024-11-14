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
        this.summaryInformation = [
          { name: 'total', amount: this.cartService.totalPrice },
          { name: 'shipping', amount: 50 },
          { name: 'vat (included)', amount: 1079 },
          { name: 'grand total', amount: this.cartService.totalPrice + 50 },
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

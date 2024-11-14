import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cartItem.interface';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { OverlayService } from '../../../services/overlay.service';
import { ModalService } from '../../../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  items: CartItem[] = [];
  totalPrice: number = 0;
  isModalActive: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private cartService: CartService,
    private overlayService: OverlayService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cartSubject$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (items) => {
        this.items = items;
        this.totalPrice = this.cartService.totalPrice;
      },
    });
    this.modalService.modalSubject$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (modalState) => {
        this.isModalActive = modalState;
      },
    });
  }

  closeModal() {
    this.modalService.modal = false;
    this.overlayService.overlay = false;
    this.cartService.clearCart();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

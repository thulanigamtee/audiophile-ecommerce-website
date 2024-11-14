import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  toastState: boolean = false;
  message: string = '';
  private destroy$ = new Subject<void>();

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.state$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (state) => (this.toastState = state),
    });
    this.toastService.message$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (message) => (this.message = message),
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PicturesComponent } from '../pictures/pictures.component';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../../models/product.interface';

@Component({
  selector: 'app-products',
  imports: [
    ButtonComponent,
    CommonModule,
    ProductCardComponent,
    PicturesComponent,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Input() heading!: string;

  private destroy$ = new Subject<void>();

  isDesktopWidth!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 1024px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        this.isDesktopWidth = state.matches;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

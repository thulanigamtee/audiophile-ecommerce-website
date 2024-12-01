import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ButtonComponent, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Input() productsData!: any;
  @Input() heading!: string;

  isDesktop!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        this.isDesktop = state.matches;
      });
  }
}

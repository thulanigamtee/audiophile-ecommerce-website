import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { PicturesComponent } from '../../components/shared/pictures/pictures.component';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../components/details/gallery/gallery.component';
import { ProductCardComponent } from '../../components/shared/product-card/product-card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.interface';
import { OtherItemsComponent } from '../../components/details/other-items/other-items.component';

@Component({
  selector: 'app-details',
  imports: [
    PicturesComponent,
    ButtonComponent,
    CommonModule,
    GalleryComponent,
    OtherItemsComponent,
    ProductCardComponent,
  ],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  productDetails!: any;
  quantity: number = 1;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.dataService.productId = this.route.snapshot.params['id'];
      },
    });
    this.getProductDetails();
  }

  getProductDetails() {
    this.dataService.data.pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.dataService.productId$.pipe(takeUntil(this.destroy$)).subscribe({
          next: (id) => {
            this.productDetails = data.filter((item: any) => item.slug === id);
          },
        });
      },
    });
  }

  decrementQuantity() {
    if (this.quantity !== 1) this.quantity--;
  }

  incrementQuantity() {
    this.quantity++;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product, this.quantity);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

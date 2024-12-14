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
import { OtherItemsComponent } from '../../components/details/other-items/other-items.component';
import { LoaderComponent } from '../../components/shared/loader/loader.component';
import { ToastService } from '../../services/toast.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-details',
  imports: [
    PicturesComponent,
    ButtonComponent,
    CommonModule,
    GalleryComponent,
    OtherItemsComponent,
    ProductCardComponent,
    LoaderComponent,
  ],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  productDetails: Product[] = [];
  quantity: number = 1;
  isLoading: boolean = true;
  isLoadingButton: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService,
    private toastService: ToastService
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
        setTimeout(() => {
          this.isLoading = false;
          this.dataService.productId$.pipe(takeUntil(this.destroy$)).subscribe({
            next: (id) => {
              this.productDetails = data.filter(
                (product: Product) => product.slug === id
              );
            },
          });
        }, 500);
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
    this.toastService.displayToastMessage(`${product.nickName} added to cart`);
    this.isLoadingButton = true;
    setTimeout(() => {
      this.isLoadingButton = false;
    }, 500);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

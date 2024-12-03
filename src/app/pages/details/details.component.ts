import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { PicturesComponent } from '../../components/pictures/pictures.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { OtherItemsComponent } from '../../components/other-items/other-items.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

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
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
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
}

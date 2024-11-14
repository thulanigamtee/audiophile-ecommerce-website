import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsComponent } from '../../components/shared/products/products.component';
import { DataService } from '../../services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-headphones',
  imports: [ProductsComponent, CommonModule],
  templateUrl: './headphones.component.html',
})
export class HeadphonesComponent implements OnInit, OnDestroy {
  headphones: Product[] = [];
  isLoading: boolean = true;
  private $destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  getHeadphonesData() {
    this.dataService.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => {
        setTimeout(() => {
          this.isLoading = false;
          this.headphones = data.filter(
            (product: Product) => product.category === 'headphones'
          );
        }, 500);
      },
    });
  }

  ngOnInit() {
    this.getHeadphonesData();
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

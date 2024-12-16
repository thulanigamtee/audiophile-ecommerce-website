import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ProductsComponent } from '../../components/shared/products/products.component';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-earphones',
  imports: [ProductsComponent],
  templateUrl: './earphones.component.html',
})
export class EarphonesComponent {
  earphones: Product[] = [];
  isLoading: boolean = true;
  private $destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  getEarphonesData() {
    this.dataService.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => {
        // setTimeout(() => {
        this.isLoading = false;
        this.earphones = data.filter(
          (product: Product) => product.category === 'earphones'
        );
        // }, 500);
      },
    });
  }

  ngOnInit() {
    this.getEarphonesData();
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

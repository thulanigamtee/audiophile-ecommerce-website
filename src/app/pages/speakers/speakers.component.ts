import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ProductsComponent } from '../../components/shared/products/products.component';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-speakers',
  imports: [ProductsComponent],
  templateUrl: './speakers.component.html',
})
export class SpeakersComponent {
  speakers: Product[] = [];
  isLoading: boolean = true;
  private $destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  getSpeakersData() {
    this.dataService.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.speakers = data.filter(
          (product: Product) => product.category === 'speakers'
        );
      },
    });
  }

  ngOnInit() {
    this.getSpeakersData();
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

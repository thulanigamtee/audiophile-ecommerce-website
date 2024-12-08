import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ProductsComponent } from '../../components/shared/products/products.component';

@Component({
  selector: 'app-earphones',
  imports: [ProductsComponent],
  templateUrl: './earphones.component.html',
})
export class EarphonesComponent {
  earphonesData!: any;
  private $destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  getEarphonesData() {
    this.dataService.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => {
        this.earphonesData = data.filter(
          (item: any) => item.category === 'earphones'
        );
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

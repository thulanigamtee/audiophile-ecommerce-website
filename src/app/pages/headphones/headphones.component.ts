import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsComponent } from '../../components/shared/products/products.component';
import { DataService } from '../../services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headphones',
  imports: [ProductsComponent, CommonModule],
  templateUrl: './headphones.component.html',
})
export class HeadphonesComponent implements OnInit, OnDestroy {
  headphonesData!: any;
  private $destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  getHeadphonesData() {
    this.dataService.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => {
        this.headphonesData = data.filter(
          (item: any) => item.category === 'headphones'
        );
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

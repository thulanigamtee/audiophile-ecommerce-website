import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ProductsComponent } from '../../components/products/products.component';

@Component({
  selector: 'app-speakers',
  imports: [ProductsComponent],
  templateUrl: './speakers.component.html',
})
export class SpeakersComponent {
  speakersData!: any;
  private $destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  getSpeakersData() {
    this.dataService.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => {
        this.speakersData = data.filter(
          (item: any) => item.category === 'speakers'
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

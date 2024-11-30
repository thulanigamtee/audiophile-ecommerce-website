import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  products: { image: string; name: string; route: string }[] = [
    {
      image: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
      name: 'headphones',
      route: '',
    },
    {
      image: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
      name: 'speakers',
      route: '',
    },
    {
      image: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
      name: 'earphones',
      route: '',
    },
  ];
}

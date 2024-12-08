import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  products: { image: string; name: string }[] = [
    {
      image: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
      name: 'headphones',
    },
    {
      image: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
      name: 'speakers',
    },
    {
      image: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
      name: 'earphones',
    },
  ];

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}

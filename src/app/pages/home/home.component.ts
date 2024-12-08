import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { ProductCardComponent } from '../../components/shared/product-card/product-card.component';
import { PicturesComponent } from '../../components/shared/pictures/pictures.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, ProductCardComponent, PicturesComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  speakerImages: {
    desktop: string;
    tablet: string;
    mobile: string;
    default: string;
  } = {
    desktop: '/assets/home/desktop/image-speaker-zx9.png',
    tablet: '/assets/home/tablet/image-speaker-zx9.png',
    mobile: '/assets/home/mobile/image-speaker-zx9.png',
    default: '/assets/home/mobile/image-speaker-zx9.png',
  };

  earphonesImages: {
    desktop: string;
    tablet: string;
    mobile: string;
    default: string;
  } = {
    desktop: '/assets/home/desktop/image-earphones-yx1.jpg',
    tablet: '/assets/home/tablet/image-earphones-yx1.jpg',
    mobile: '/assets/home/mobile/image-earphones-yx1.jpg',
    default: '/assets/home/mobile/image-earphones-yx1.jpg',
  };
}

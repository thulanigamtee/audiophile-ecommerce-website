import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PicturesComponent } from '../../components/pictures/pictures.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, ProductCardComponent, PicturesComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  speakerImages: {
    desktopImage: string;
    tabletImage: string;
    mobileImage: string;
    defaultImage: string;
  } = {
    desktopImage: '/assets/home/desktop/image-speaker-zx9.png',
    tabletImage: '/assets/home/tablet/image-speaker-zx9.png',
    mobileImage: '/assets/home/mobile/image-speaker-zx9.png',
    defaultImage: '/assets/home/mobile/image-speaker-zx9.png',
  };

  earphonesImages: {
    desktopImage: string;
    tabletImage: string;
    mobileImage: string;
    defaultImage: string;
  } = {
    desktopImage: '/assets/home/desktop/image-earphones-yx1.jpg',
    tabletImage: '/assets/home/tablet/image-earphones-yx1.jpg',
    mobileImage: '/assets/home/mobile/image-earphones-yx1.jpg',
    defaultImage: '/assets/home/mobile/image-earphones-yx1.jpg',
  };
}

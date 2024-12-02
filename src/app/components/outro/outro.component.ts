import { Component } from '@angular/core';
import { PicturesComponent } from '../pictures/pictures.component';

@Component({
  selector: 'app-outro',
  imports: [PicturesComponent],
  templateUrl: './outro.component.html',
})
export class OutroComponent {
  bestGearImages: {
    desktopImage: string;
    tabletImage: string;
    mobileImage: string;
    defaultImage: string;
  } = {
    desktopImage: '/assets/shared/desktop/image-best-gear.jpg',
    tabletImage: '/assets/shared/tablet/image-best-gear.jpg',
    mobileImage: '/assets/shared/mobile/image-best-gear.jpg',
    defaultImage: '/assets/shared/mobile/image-best-gear.jpg',
  };
}

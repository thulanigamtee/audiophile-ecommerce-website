import { Component } from '@angular/core';
import { PicturesComponent } from '../pictures/pictures.component';
import { Image } from '../../../models/image.interface';

@Component({
  selector: 'app-outro',
  imports: [PicturesComponent],
  templateUrl: './outro.component.html',
})
export class OutroComponent {
  bestGearImages: Image = {
    desktop: '/assets/shared/desktop/image-best-gear.jpg',
    tablet: '/assets/shared/tablet/image-best-gear.jpg',
    mobile: '/assets/shared/mobile/image-best-gear.jpg',
  };
}

import { Component, Input } from '@angular/core';
import { PicturesComponent } from '../pictures/pictures.component';

@Component({
  selector: 'app-gallery',
  imports: [PicturesComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  @Input() firstItem!: {
    desktop: string;
    tablet: string;
    mobile: string;
    default: string;
  };
  @Input() secondItem!: {
    desktop: string;
    tablet: string;
    mobile: string;
    default: string;
  };
  @Input() thirdItem!: {
    desktop: string;
    tablet: string;
    mobile: string;
    default: string;
  };
}

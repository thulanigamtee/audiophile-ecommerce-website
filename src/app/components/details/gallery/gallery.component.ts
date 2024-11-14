import { Component, Input } from '@angular/core';
import { PicturesComponent } from '../../shared/pictures/pictures.component';
import { Gallery } from '../../../models/gallery.interface';

@Component({
  selector: 'app-gallery',
  imports: [PicturesComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  @Input() gallery!: Gallery;
}

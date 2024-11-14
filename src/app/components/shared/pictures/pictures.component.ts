import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from '../../../models/image.interface';

@Component({
  selector: 'app-pictures',
  imports: [CommonModule],
  templateUrl: './pictures.component.html',
})
export class PicturesComponent {
  @Input() image!: Image;
}

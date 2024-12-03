import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pictures',
  imports: [CommonModule],
  templateUrl: './pictures.component.html',
})
export class PicturesComponent {
  @Input() images!: {
    desktop: string;
    tablet: string;
    mobile: string;
    default: string;
  };
}

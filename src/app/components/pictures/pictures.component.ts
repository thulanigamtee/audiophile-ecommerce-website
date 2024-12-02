import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pictures',
  imports: [],
  templateUrl: './pictures.component.html',
})
export class PicturesComponent {
  @Input() images!: {
    desktopImage: string;
    tabletImage: string;
    mobileImage: string;
    defaultImage: string;
  };
}

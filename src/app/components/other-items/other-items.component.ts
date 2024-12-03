import { Component, Input } from '@angular/core';
import { PicturesComponent } from '../pictures/pictures.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-other-items',
  imports: [PicturesComponent, ButtonComponent],
  templateUrl: './other-items.component.html',
})
export class OtherItemsComponent {
  @Input() items!: any;
}

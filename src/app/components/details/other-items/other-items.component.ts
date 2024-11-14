import { Component, Input } from '@angular/core';
import { PicturesComponent } from '../../shared/pictures/pictures.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { OtherItems } from '../../../models/otherItems.interface';

@Component({
  selector: 'app-other-items',
  imports: [PicturesComponent, ButtonComponent],
  templateUrl: './other-items.component.html',
})
export class OtherItemsComponent {
  @Input() otherItems!: OtherItems[];
}

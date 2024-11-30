import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, ProductCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

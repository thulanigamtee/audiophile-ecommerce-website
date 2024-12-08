import { Component } from '@angular/core';
import { SummaryComponent } from '../../components/checkout/summary/summary.component';
import { FormComponent } from '../../components/checkout/form/form.component';

@Component({
  selector: 'app-checkout',
  imports: [FormComponent, SummaryComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {}

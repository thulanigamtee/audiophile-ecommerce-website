import { Component, ViewChild } from '@angular/core';
import { SummaryComponent } from '../../components/checkout/summary/summary.component';
import { FormComponent } from '../../components/checkout/form/form.component';
import { ModalComponent } from '../../components/checkout/modal/modal.component';

@Component({
  selector: 'app-checkout',
  imports: [FormComponent, SummaryComponent, ModalComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {}

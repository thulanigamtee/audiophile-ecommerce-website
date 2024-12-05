import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, InputComponent, CommonModule, ButtonComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  form!: FormGroup;
  paymentMethod: string = 'e-money';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      shippingAddress: this.formBuilder.group({
        street: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
      paymentDetails: this.formBuilder.group({
        paymentMethod: [this.paymentMethod, Validators.required],
        eMoneyNumber: ['', Validators.required],
        eMoneyPin: ['', Validators.required],
      }),
    });
  }

  radioButtons = [{ label: 'e-money' }, { label: 'cash on delivery' }];
  setPaymentMethod(method: string) {
    this.paymentMethod = method;
    this.form.get('paymentDetails')?.get('paymentMethod')?.setValue(method);
  }
}

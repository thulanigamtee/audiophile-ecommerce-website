import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() id!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() control!: any;
  @Input() customStyle!: string;
}

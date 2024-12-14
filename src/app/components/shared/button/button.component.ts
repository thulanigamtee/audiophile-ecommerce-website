import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() customStyle!: string;
  @Input() isRoute!: boolean;
  @Input() route!: string[];
  @Input() disabled!: boolean;
  @Input() isLoading!: boolean;

  @Output() buttonEvent = new EventEmitter();

  emitButtonEvent() {
    this.buttonEvent.emit();
  }
}

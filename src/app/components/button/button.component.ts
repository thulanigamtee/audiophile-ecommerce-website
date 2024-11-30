import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label!: string;
  // @Input() color!: string;
  @Input() customStyle!: string;

  @Output() buttonEvent = new EventEmitter();

  emitButtonEvent() {
    this.buttonEvent.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-call-to-action-button',
  templateUrl: './call-to-action-button.component.html',
  styleUrls: ['./call-to-action-button.component.scss'],
})
export class CallToActionButtonComponent {
  @Input() buttonLabel!: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Output() action = new EventEmitter<void>();
}

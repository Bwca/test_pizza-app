import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-call-to-action-button',
  templateUrl: './call-to-action-button.component.html',
  styleUrls: ['./call-to-action-button.component.scss']
})
export class CallToActionButtonComponent {

  @Input() buttonLabel!: string;
  @Output() action = new EventEmitter<void>();

}

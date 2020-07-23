import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-amount',
  templateUrl: './item-amount.component.html',
  styleUrls: ['./item-amount.component.scss'],
})
export class ItemAmountComponent {
  @Input() amount = 1;

  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();
}

import { Component } from '@angular/core';

import { TotalAmountService } from '../shared/total-amount/total-amount.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent {
  public total$ = this.totalAmoutService.total$;
  constructor(private totalAmoutService: TotalAmountService) {}
}

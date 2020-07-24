import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { DeliveryCostsService } from '../shared/delivery-costs/delivery-costs.service';
import { TotalAmountService } from '../shared/total-amount/total-amount.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent {
  public deliveryCost!: number;

  public total$ = combineLatest([
    this.deliveryCostsService.getDeliveryCost$,
    this.totalAmoutService.total$.pipe(filter((i) => Boolean(i))),
  ]).pipe(
    tap(([delivery]) => (this.deliveryCost = delivery)),
    map(([delivery, itemsTotal]) => itemsTotal + delivery)
  );
  constructor(private totalAmoutService: TotalAmountService, private deliveryCostsService: DeliveryCostsService) {}
}

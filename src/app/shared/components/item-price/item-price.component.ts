import { Component, Input, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';

import { CurrencyService } from '../../currency/currency.service';

@Component({
  selector: 'app-item-price',
  templateUrl: './item-price.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ItemPriceComponent {
  @Input() price!: number;

  public currencyCode$ = this.currencyService.selectedCurrency$.pipe(map(({ code }) => code));

  constructor(private currencyService: CurrencyService) {}
}

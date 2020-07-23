import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { CurrencyService } from '../currency/currency.service';
import { PizzaDto } from '../dto/pizza.dto';

@Injectable({
  providedIn: 'root',
})
export class PizzaPriceService {
  constructor(private currencyService: CurrencyService) {}

  public getPizzaPrice(pizza: PizzaDto): Observable<number> {
    return this.currencyService.selectedCurrency$.pipe(
      filter((currency) => Boolean(currency.id)),
      map((currency) => {
        const price = pizza.prices.find(
          ({ currencyId }) => currency.id === currencyId
        );
        if (price) {
          return price.amount;
        } else {
          throw new Error('Price for the selected currency does not exist!');
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PizzaDto } from '../dto/pizza.dto';
import { CurrencyService } from '../currency/currency.service';

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

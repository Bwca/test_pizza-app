import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CurrencyService } from '../currency/currency.service';
import { PizzaDto } from '../dto/pizza.dto';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaPriceService {
  constructor(private currencyService: CurrencyService) {}

  public getPizzaPrice$(pizza: PizzaDto): Observable<number> {
    return this.currencyService.selectedCurrency$.pipe(
      map((currency) => {
        const price = pizza.prices.find(({ currencyId }) => currency.id === currencyId);
        if (price) {
          return price.amount;
        } else {
          throw new Error('Price for the selected currency does not exist!');
        }
      })
    );
  }

  public getTotalPrice$(items: ShoppingCartItem[]): Observable<number> {
    return this.currencyService.selectedCurrency$.pipe(
      map((currency) =>
        items.reduce((total, cartItem) => {
          const cartItemPrice = cartItem.item.prices.find(({ currencyId }) => currency.id === currencyId);

          if (!cartItemPrice) {
            throw new Error('Price for the selected currency does not exist!');
          }

          return total + cartItemPrice.amount * cartItem.quantity;
        }, 0)
      )
    );
  }
}

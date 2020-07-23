import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PizzaPriceService } from '../pizza-price/pizza-price.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class TotalAmountService {
  constructor(private shoppingCart: ShoppingCartService, private pizzaPriceService: PizzaPriceService) {}

  public get total$(): Observable<number> {
    return this.shoppingCart.cartItems$.pipe(switchMap((items) => this.pizzaPriceService.getTotalPrice$(items)));
  }
}

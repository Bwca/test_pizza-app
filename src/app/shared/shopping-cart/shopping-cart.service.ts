import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PizzaDto } from '../dto/pizza.dto';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  public getQuantityInShoppingCart(item: PizzaDto): Observable<number> {
    return of(15);
  }

  public addToCart(item: PizzaDto, qty: number): void {}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { CurrencyService } from '../currency/currency.service';
import { CreateOrderDto } from '../dto/create-order/create-order.dto';
import { CurrencyDto } from '../dto/currency.dto';
import { OrderHistoryDto } from '../dto/order-history/order-history.dto';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

interface GenerateOrderPayload {
  items: ShoppingCartItem[];
  currency: CurrencyDto;
  name: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private apiService: ApiService, private shoppingCartService: ShoppingCartService, private currencyService: CurrencyService) {}

  public placeOrder(name: string, phone: string): Observable<OrderHistoryDto> {
    return this.shoppingCartService.cartItems$.pipe(
      withLatestFrom(this.currencyService.selectedCurrency$),
      first(),
      map(([items, currency]) => this.generateOrderDto({ name, phone, items, currency })),
      switchMap((orderDto) => this.apiService.placeOrder(orderDto)),
      tap(() => this.shoppingCartService.emptyCart())
    );
  }

  public getOrderHistory(): Observable<OrderHistoryDto[]> {
    return this.apiService.getOrdersHistory();
  }

  private generateOrderDto({ name, phone, currency, items }: GenerateOrderPayload): CreateOrderDto {
    return {
      currencyId: currency.id,
      name,
      phone,
      orderedItems: items.map((i) => ({ itemId: i.item.id, quantity: i.quantity })),
    } as CreateOrderDto;
  }
}

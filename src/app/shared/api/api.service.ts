import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { API_ENDPOINTS } from '../const/api-endpoints.const';
import { CreateOrderDto } from '../dto/create-order/create-order.dto';
import { CurrencyDto } from '../dto/currency.dto';
import { OrderHistoryDto } from '../dto/order-history/order-history.dto';
import { PizzaDto } from '../dto/pizza.dto';
import { LoginDto } from '../dto/user/login.dto';
import { UserDto } from '../dto/user/user.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getCurrenciesDictionary(): Observable<CurrencyDto[]> {
    return this.http.get<CurrencyDto[]>(API_ENDPOINTS.currencies);
  }

  public getPizzas(): Observable<PizzaDto[]> {
    return this.http.get<PizzaDto[]>(API_ENDPOINTS.pizzas);
  }

  public getOrdersHistory(): Observable<OrderHistoryDto[]> {
    return this.http.get<OrderHistoryDto[]>(API_ENDPOINTS.orders);
  }

  public placeOrder(order: CreateOrderDto): Observable<OrderHistoryDto> {
    return this.http.post<OrderHistoryDto>(API_ENDPOINTS.orders, order);
  }

  public login(credentials: LoginDto): Observable<UserDto> {
    return this.http.post<UserDto>(API_ENDPOINTS.login, credentials);
  }

  public logout(): Observable<void> {
    return this.http.get<void>(API_ENDPOINTS.logout, {});
  }
}

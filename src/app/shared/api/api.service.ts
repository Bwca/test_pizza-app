import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CurrencyDto } from '../dto/currency.dto';
import { API_ENDPOINTS } from '../const/api-endpoints.const';
import { PizzaDto } from '../dto/pizza.dto';
import { OrderHistoryDto } from '../dto/order-history/order-history.dto';
import { CreateOrderDto } from '../dto/create-order/create-order.dto';
import { UserDto } from '../dto/user/user.dto';
import { LoginDto } from '../dto/user/login.dto';

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

  public userLogin(login: LoginDto): Observable<UserDto> {
    return this.http.post<UserDto>(API_ENDPOINTS.login, login);
  }
}

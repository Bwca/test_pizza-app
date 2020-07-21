import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { PizzaDto } from '../shared/dto/pizza.dto';
import { UserDto } from '../shared/dto/user.dto';
import { CurrencyDto } from '../shared/dto/currency.dto';
import { OrderDto } from '../shared/dto/order.dto';
import {
  CURRENCIES_MOCKUP,
  PIZZAS_MOCKUPS,
  USERS_MOCKUP,
  ORDER_HISTORY_MOCKUP,
} from './mockups';

interface FakeDatabase {
  pizzas: PizzaDto[];
  currencies: CurrencyDto[];
  users: UserDto[];
  orders: OrderDto[];
}

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService implements InMemoryDbService {
  public createDb(): FakeDatabase {
    const pizzas: PizzaDto[] = PIZZAS_MOCKUPS;
    const currencies = CURRENCIES_MOCKUP;
    const users = USERS_MOCKUP;
    const orders = ORDER_HISTORY_MOCKUP;
    return { pizzas, currencies, users, orders };
  }
}

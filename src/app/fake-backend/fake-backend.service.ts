import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';

import { CreateOrderDto } from '../shared/dto/create-order/create-order.dto';
import { CurrencyDto } from '../shared/dto/currency.dto';
import { OrderHistoryItemDto } from '../shared/dto/order-history/order-history-item.dto';
import { OrderHistoryDto } from '../shared/dto/order-history/order-history.dto';
import { PizzaDto } from '../shared/dto/pizza.dto';
import { PriceDto } from '../shared/dto/price.dto';
import { UserDto } from '../shared/dto/user/user.dto';
import { CURRENCIES_MOCKUP, DELIVERY_COSTS, ORDER_HISTORY_MOCKUP, PIZZAS_MOCKUPS, USERS_MOCKUP } from './mockups';

interface FakeDatabase {
  pizzas: PizzaDto[];
  currencies: CurrencyDto[];
  orders: OrderHistoryDto[];
  delivery: PriceDto[];
}

@Injectable({
  providedIn: 'root',
})
/* tslint:disable */
export class FakeBackendService implements InMemoryDbService {
  private isUserLoggedIn = false;

  public createDb(): FakeDatabase {
    const currencies = CURRENCIES_MOCKUP;
    const pizzas = PIZZAS_MOCKUPS;
    const orders = ORDER_HISTORY_MOCKUP;
    const delivery = DELIVERY_COSTS;
    return { pizzas, currencies, orders, delivery };
  }

  post(reqInfo: RequestInfo): any {
    switch (reqInfo.collectionName) {
      case 'login':
        return this.authenticate(reqInfo);
      case 'orders':
        return this.placeOrder(reqInfo);
      default:
        return undefined;
    }
  }

  get(reqInfo: RequestInfo): any {
    if (reqInfo.collectionName === 'logout') {
      return this.logout(reqInfo);
    }
    return null;
  }

  private logout(reqInfo: RequestInfo): any {
    const { headers, url } = reqInfo;
    this.isUserLoggedIn = false;
    return {
      status: 200,
      headers,
      url,
      body: {
        user: 'none',
      },
    };
  }

  private authenticate(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo;
      const response401 = {
        status: 401,
        headers,
        url,
        body: {},
      };

      const { login, password } = (req as any).body;

      if (!login || !password) {
        return response401;
      }

      const user = USERS_MOCKUP.find((i) => i.login === login);

      if (!user || user.password !== password) {
        return response401;
      }

      const { username, id } = user;
      const body: UserDto = {
        id,
        username,
        login,
      };

      this.isUserLoggedIn = true;

      return {
        status: 200,
        headers,
        url,
        body,
      };
    });
  }

  private placeOrder(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => {
      const reqBody: CreateOrderDto = (reqInfo.req as any).body;
      const { headers, url } = reqInfo;

      const id = ORDER_HISTORY_MOCKUP.length ? Math.max(...ORDER_HISTORY_MOCKUP.map(({ id }) => id)) + 1 : 1;
      const date = new Date().toISOString();
      const items: OrderHistoryItemDto[] = [];

      let total = 0;
      const selectedCurrency = CURRENCIES_MOCKUP.find((i) => i.id === reqBody.currencyId);
      try {
        reqBody.orderedItems.forEach((i) => {
          const item = PIZZAS_MOCKUPS.find(({ id }) => id === i.itemId);
          items.push({
            name: item!.name,
            quantity: i.quantity,
          });
          total += item!.prices.find((i) => i.currencyId === selectedCurrency!.id)!.amount * i.quantity;
        });
        const deliveryCost = DELIVERY_COSTS.find((i) => i.currencyId === selectedCurrency?.id);
        if (deliveryCost) {
          total += deliveryCost.amount;
        } else {
          throw new Error('delivery cost not found!');
        }
      } catch (e) {
        console.log(e);
        return {
          status: 500,
          headers,
          url,
          body: {},
        };
      }

      const orderHistoryDto: OrderHistoryDto = {
        id,
        date,
        items,
        total: `${selectedCurrency!.symbol}${total.toFixed(2)}`,
      };

      if (this.isUserLoggedIn) {
        ORDER_HISTORY_MOCKUP.push(orderHistoryDto);
      }

      return {
        status: 200,
        headers,
        url,
        body: orderHistoryDto,
      };
    });
  }
}

import { TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { ApiService } from '../api/api.service';
import { CurrencyService } from '../currency/currency.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { OrderService } from './order.service';

describe('OrderServiceService', () => {
  let apiService: ApiService;
  let shoppingCartService: ShoppingCartService;
  let currencyService: CurrencyService;
  let service: OrderService;

  beforeEach(() => {
    apiService = mock(ApiService);
    shoppingCartService = mock(ShoppingCartService);
    currencyService = mock(CurrencyService);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useFactory: () => instance(apiService),
        },
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCartService),
        },
        {
          provide: CurrencyService,
          useFactory: () => instance(currencyService),
        },
      ],
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

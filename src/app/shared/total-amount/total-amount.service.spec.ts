import { TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { PizzaPriceService } from '../pizza-price/pizza-price.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { TotalAmountService } from './total-amount.service';

describe('TotalAmountService', () => {
  let shoppingCart: ShoppingCartService;
  let pizzaPriceService: PizzaPriceService;

  let service: TotalAmountService;

  beforeEach(() => {
    shoppingCart = mock(ShoppingCartService);
    pizzaPriceService = mock(PizzaPriceService);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCart),
        },
        {
          provide: PizzaPriceService,
          useFactory: () => instance(pizzaPriceService),
        },
      ],
    });
    service = TestBed.inject(TotalAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

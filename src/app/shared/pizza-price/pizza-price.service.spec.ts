import { TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { CurrencyService } from '../currency/currency.service';
import { PizzaPriceService } from './pizza-price.service';

describe('PizzaPriceService', () => {
  let currencyService: CurrencyService;
  let service: PizzaPriceService;

  beforeEach(() => {
    currencyService = mock(CurrencyService);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CurrencyService,
          useFactory: () => instance(currencyService),
        },
      ],
    });
    service = TestBed.inject(PizzaPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

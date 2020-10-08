import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { ApiService } from '../api/api.service';
import { CurrencyService } from '../currency/currency.service';
import { DeliveryCostsService } from './delivery-costs.service';

describe('DeliveryCostsService', () => {
  let currencyService: CurrencyService;
  let apiService: ApiService;
  let service: DeliveryCostsService;

  beforeEach(() => {
    currencyService = mock(CurrencyService);
    apiService = mock(ApiService);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CurrencyService,
          useFactory: () => instance(currencyService),
        },
        {
          provide: ApiService,
          useFactory: () => instance(apiService),
        },
      ],
    });
    when(apiService.getDeliveryCosts()).thenReturn(of([]));
    service = TestBed.inject(DeliveryCostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

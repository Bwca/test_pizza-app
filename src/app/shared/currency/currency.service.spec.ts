import { TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { ApiService } from '../api/api.service';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let apiService: ApiService;
  let service: CurrencyService;

  beforeEach(() => {
    apiService = mock(ApiService);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useFactory: () => instance(apiService),
        },
      ],
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

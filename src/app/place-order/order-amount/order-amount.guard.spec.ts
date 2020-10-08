import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { instance, mock } from 'ts-mockito';

import { TotalAmountService } from 'src/app/shared/total-amount/total-amount.service';
import { OrderAmountGuard } from './order-amount.guard';

describe('OrderAmountGuard', () => {
  let totalAmountService: TotalAmountService;
  let router: Router;
  let guard: OrderAmountGuard;

  beforeEach(() => {
    totalAmountService = mock(TotalAmountService);
    router = mock(Router);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TotalAmountService,
          useFactory: () => instance(totalAmountService),
        },
        {
          provide: Router,
          useFactory: () => instance(router),
        },
      ],
    });
    guard = TestBed.inject(OrderAmountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

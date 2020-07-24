import { TestBed } from '@angular/core/testing';

import { OrderAmountGuard } from './order-amount.guard';

describe('OrderAmountGuard', () => {
  let guard: OrderAmountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrderAmountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

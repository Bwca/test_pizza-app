import { TestBed } from '@angular/core/testing';

import { PizzaPriceService } from './pizza-price.service';

describe('PizzaPriceService', () => {
  let service: PizzaPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

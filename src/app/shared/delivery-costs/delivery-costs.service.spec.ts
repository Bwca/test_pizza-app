import { TestBed } from '@angular/core/testing';

import { DeliveryCostsService } from './delivery-costs.service';

describe('DeliveryCostsService', () => {
  let service: DeliveryCostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryCostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

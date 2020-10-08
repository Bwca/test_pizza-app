import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { DeliveryCostsService } from '../shared/delivery-costs/delivery-costs.service';
import { TotalAmountService } from '../shared/total-amount/total-amount.service';
import { PlaceOrderComponent } from './place-order.component';

describe('PlaceOrderComponent', () => {
  let totalAmoutService: TotalAmountService;
  let deliveryCostsService: DeliveryCostsService;
  let component: PlaceOrderComponent;
  let fixture: ComponentFixture<PlaceOrderComponent>;

  beforeEach(async(() => {
    totalAmoutService = mock(TotalAmountService);
    deliveryCostsService = mock(DeliveryCostsService);
    TestBed.configureTestingModule({
      declarations: [PlaceOrderComponent],
      providers: [
        {
          provide: TotalAmountService,
          useFactory: () => instance(totalAmoutService)
        },
        {
          provide: DeliveryCostsService,
          useFactory: () => instance(deliveryCostsService)
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    when(deliveryCostsService.getDeliveryCost$).thenReturn(of(0));
    when(totalAmoutService.total$).thenReturn(of(0));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

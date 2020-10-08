import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { instance, mock } from 'ts-mockito';

import { OrderService } from '../../shared/order/order.service';
import { PlaceOrderFormComponent } from './place-order-form.component';

describe('PlaceOrderFormComponent', () => {
  let orderService: OrderService;
  let component: PlaceOrderFormComponent;
  let fixture: ComponentFixture<PlaceOrderFormComponent>;

  beforeEach(async(() => {
    orderService = mock(OrderService);
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PlaceOrderFormComponent],
      providers: [
        {
          provide: OrderService,
          useFactory: () => instance(orderService)
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

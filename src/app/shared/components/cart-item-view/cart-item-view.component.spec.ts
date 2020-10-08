import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { PizzaPriceService } from '../../pizza-price/pizza-price.service';
import { CartItemViewComponent } from './cart-item-view.component';

describe('CartItemViewComponent', () => {
  let pizzaPriceService: PizzaPriceService;
  let component: CartItemViewComponent;
  let fixture: ComponentFixture<CartItemViewComponent>;

  beforeEach(async(() => {
    pizzaPriceService = mock(PizzaPriceService);
    TestBed.configureTestingModule({
      declarations: [CartItemViewComponent],
      providers: [
        {
          provide: PizzaPriceService,
          useFactory: () => instance(pizzaPriceService),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

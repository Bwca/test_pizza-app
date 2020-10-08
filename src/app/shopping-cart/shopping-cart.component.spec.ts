import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { ShoppingCartService } from '../shared/shopping-cart/shopping-cart.service';
import { TotalAmountService } from '../shared/total-amount/total-amount.service';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let shoppingCart: ShoppingCartService;
  let totalAmountService: TotalAmountService;
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    shoppingCart = mock(ShoppingCartService);
    totalAmountService = mock(TotalAmountService);
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      providers: [
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCart),
        },
        {
          provide: TotalAmountService,
          useFactory: () => instance(totalAmountService),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    when(shoppingCart.cartItems$).thenReturn(of([]));
    when(totalAmountService.total$).thenReturn(of(0));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

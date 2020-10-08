import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let shoppingCart: ShoppingCartService;
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    shoppingCart = mock(ShoppingCartService);
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCart),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

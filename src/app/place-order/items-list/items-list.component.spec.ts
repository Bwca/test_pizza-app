import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';
import { ItemsListComponent } from './items-list.component';

describe('ItemsListComponent', () => {
  let shoppingCart: ShoppingCartService;
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async(() => {
    shoppingCart = mock(ShoppingCartService);
    TestBed.configureTestingModule({
      declarations: [ItemsListComponent],
      providers: [
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCart)
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    when(shoppingCart.cartItems$).thenReturn(of([]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

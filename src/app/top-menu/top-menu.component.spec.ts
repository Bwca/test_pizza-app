import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { CurrencyService } from '../shared/currency/currency.service';
import { CurrencyDto } from '../shared/dto/currency.dto';
import { LoginService } from '../shared/login/login.service';
import { ShoppingCartService } from '../shared/shopping-cart/shopping-cart.service';
import { UserService } from '../shared/user/user.service';
import { TopMenuComponent } from './top-menu.component';

describe('TopMenuComponent', () => {
  let currencyService: CurrencyService;
  let shoppingCartService: ShoppingCartService;
  let loginService: LoginService;
  let userService: UserService;
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async(() => {
    currencyService = mock(CurrencyService);
    shoppingCartService = mock(ShoppingCartService);
    loginService = mock(LoginService);
    userService = mock(UserService);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TopMenuComponent],
      providers: [
        {
          provide: CurrencyService,
          useFactory: () => instance(currencyService),
        },
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCartService),
        },
        {
          provide: LoginService,
          useFactory: () => instance(loginService),
        },
        {
          provide: UserService,
          useFactory: () => instance(userService),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    when(currencyService.availableCurrencies$).thenReturn(of([]));
    when(currencyService.selectedCurrency$).thenReturn(of({} as CurrencyDto));
    when(userService.user$).thenReturn(of(null));
    when(shoppingCartService.totalItemsInCart$).thenReturn(of(0));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

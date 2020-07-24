import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRoutes } from '../app-routing/app-routes.enum';
import { CurrencyService } from '../shared/currency/currency.service';
import { CurrencyDto } from '../shared/dto/currency.dto';
import { LoginService } from '../shared/login/login.service';
import { ShoppingCartService } from '../shared/shopping-cart/shopping-cart.service';
import { UserService } from '../shared/user/user.service';

interface MenuCurrency extends CurrencyDto {
  isActive: boolean;
}

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  public currencies$: Observable<MenuCurrency[]> = combineLatest([
    this.currencyService.availableCurrencies$,
    this.currencyService.selectedCurrency$,
  ]).pipe(
    map(([currencies, selected]) =>
      currencies.map(
        (i) =>
          ({
            ...i,
            isActive: i.id === selected.id,
          } as MenuCurrency)
      )
    )
  );

  public isLoggedIn$ = this.userService.user$.pipe(map(Boolean));
  public totalItemsInCart = 0;
  public routes = AppRoutes;

  constructor(
    private currencyService: CurrencyService,
    private shoppingCartService: ShoppingCartService,
    private loginService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.totalItemsInCart$.subscribe((i) => (this.totalItemsInCart = i));
  }

  public selectCurrency(currency: CurrencyDto): void {
    this.currencyService.setCurrency(currency);
  }

  public logout(): void {
    this.loginService.logout().subscribe();
  }
}

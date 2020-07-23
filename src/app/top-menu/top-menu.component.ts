import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRoutes } from '../app-routing/app-routes.enum';
import { CurrencyService } from '../shared/currency/currency.service';
import { CurrencyDto } from '../shared/dto/currency.dto';
import { ShoppingCartService } from '../shared/shopping-cart/shopping-cart.service';

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

  public isLoggedIn$ = of(false);
  public totalItemsInCart = 0;
  public routes = AppRoutes;

  constructor(private currencyService: CurrencyService, private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.totalItemsInCart$.subscribe((i) => (this.totalItemsInCart = i));
  }

  public selectCurrency(currency: CurrencyDto): void {
    this.currencyService.setCurrency(currency);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';
import { AppRoutes } from '../app-routing/app-routes.enum';
import { PizzaPriceService } from '../shared/pizza-price/pizza-price.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  public items$ = this.shoppingCart.cartItems$;
  public total$ = this.shoppingCart.cartItems$.pipe(switchMap((items) => this.pizzaPriceService.getTotalPrice$(items)));

  public routes = AppRoutes;

  constructor(private shoppingCart: ShoppingCartService, private pizzaPriceService: PizzaPriceService, private router: Router) {}

  public goToCatalogue(): void {
    this.router.navigate([this.routes.Catalogue]);
  }
}

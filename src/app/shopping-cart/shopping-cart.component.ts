import { Component } from '@angular/core';

import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';
import { AppRoutes } from '../app-routing/app-routes.enum';
import { TotalAmountService } from '../shared/total-amount/total-amount.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  public items$ = this.shoppingCart.cartItems$;
  public total$ = this.totalAmountService.total$;

  public routes = AppRoutes;

  constructor(private shoppingCart: ShoppingCartService, private totalAmountService: TotalAmountService) {}
}

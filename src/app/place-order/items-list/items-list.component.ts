import { Component } from '@angular/core';

import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  public items$ = this.shoppingCart.cartItems$;

  constructor(private shoppingCart: ShoppingCartService) {}
}

import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  public items$ = this.shoppingCart.cartItems$.pipe(first());

  constructor(private shoppingCart: ShoppingCartService) {}
}

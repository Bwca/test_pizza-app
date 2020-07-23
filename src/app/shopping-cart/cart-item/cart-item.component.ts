import { Component, Input } from '@angular/core';

import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart-item.model';
import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem!: ShoppingCartItem;

  constructor(private shoppingCart: ShoppingCartService) {}

  public increaseAmount(): void {
    this.shoppingCart.addToCart(this.cartItem.item, 1);
  }

  public decreaseAmount(): void {
    this.shoppingCart.removeFromCart(this.cartItem.item);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartItemComponent } from './cart-item/cart-item.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [CommonModule, ShoppingCartRoutingModule],
})
export class ShoppingCartModule {}

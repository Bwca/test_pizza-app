import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [CommonModule, ShoppingCartRoutingModule],
})
export class ShoppingCartModule {}

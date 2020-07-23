import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [CommonModule, RouterModule, ShoppingCartRoutingModule, SharedModule],
})
export class ShoppingCartModule {}

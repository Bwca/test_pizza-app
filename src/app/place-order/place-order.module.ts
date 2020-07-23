import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { PlaceOrderComponent } from './place-order.component';

@NgModule({
  declarations: [PlaceOrderComponent],
  imports: [CommonModule, PlaceOrderRoutingModule],
})
export class PlaceOrderModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { PlaceOrderFormComponent } from './place-order-form/place-order-form.component';
import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { PlaceOrderComponent } from './place-order.component';

@NgModule({
  declarations: [PlaceOrderComponent, ItemsListComponent, PlaceOrderFormComponent],
  imports: [CommonModule, PlaceOrderRoutingModule, SharedModule],
})
export class PlaceOrderModule {}

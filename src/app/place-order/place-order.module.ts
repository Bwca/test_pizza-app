import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { PlaceOrderFormComponent } from './place-order-form/place-order-form.component';
import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { PlaceOrderComponent } from './place-order.component';

@NgModule({
  declarations: [PlaceOrderComponent, ItemsListComponent, PlaceOrderFormComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PlaceOrderRoutingModule, SharedModule],
})
export class PlaceOrderModule {}

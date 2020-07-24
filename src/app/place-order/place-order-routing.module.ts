import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderAmountGuard } from './order-amount/order-amount.guard';
import { PlaceOrderComponent } from './place-order.component';

const routes: Routes = [{ path: '', component: PlaceOrderComponent, canActivate: [OrderAmountGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceOrderRoutingModule {}

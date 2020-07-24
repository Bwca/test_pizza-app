import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsAuthenticatedGuard } from 'src/app/shared/is-authenticated/is-authenticated.guard';
import { OrdersHistoryComponent } from './orders-history.component';

const routes: Routes = [{ path: '', component: OrdersHistoryComponent, canActivate: [IsAuthenticatedGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersHistoryRoutingModule {}

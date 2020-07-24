import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HistoryRecordComponent } from './history-record/history-record.component';
import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { OrdersHistoryComponent } from './orders-history.component';

@NgModule({
  declarations: [OrdersHistoryComponent, HistoryRecordComponent],
  imports: [CommonModule, OrdersHistoryRoutingModule, SharedModule],
})
export class OrdersHistoryModule {}

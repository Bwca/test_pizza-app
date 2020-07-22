import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { OrdersHistoryComponent } from './orders-history.component';
import { HistoryRecordComponent } from './history-record/history-record.component';

@NgModule({
  declarations: [OrdersHistoryComponent, HistoryRecordComponent],
  imports: [CommonModule, OrdersHistoryRoutingModule],
})
export class OrdersHistoryModule {}

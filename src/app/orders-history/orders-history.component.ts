import { Component } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss'],
})
export class OrdersHistoryComponent {
  public orders$ = this.apiService.getOrdersHistory();
  constructor(private apiService: ApiService) {}
}

import { Component, Input, OnInit } from '@angular/core';

import { OrderHistoryDto } from 'src/app/shared/dto/order-history/order-history.dto';

@Component({
  selector: 'app-history-record',
  templateUrl: './history-record.component.html',
  styleUrls: ['./history-record.component.scss'],
})
export class HistoryRecordComponent implements OnInit {
  @Input() record!: OrderHistoryDto;
  constructor() {}

  ngOnInit(): void {}
}

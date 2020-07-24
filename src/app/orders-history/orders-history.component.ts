import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AppRoutes } from '../app-routing/app-routes.enum';
import { ApiService } from '../shared/api/api.service';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss'],
})
export class OrdersHistoryComponent implements OnInit, OnDestroy {
  public orders$ = this.apiService.getOrdersHistory();

  private sub!: Subscription;
  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.userService.user$.pipe(filter((user) => !user)).subscribe(() => this.router.navigate([AppRoutes.Home]));
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

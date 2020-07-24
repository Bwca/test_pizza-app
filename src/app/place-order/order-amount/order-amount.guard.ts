import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

import { AppRoutes } from 'src/app/app-routing/app-routes.enum';
import { TotalAmountService } from 'src/app/shared/total-amount/total-amount.service';

@Injectable({
  providedIn: 'root',
})
export class OrderAmountGuard implements CanActivate {
  constructor(private totalAmountService: TotalAmountService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.totalAmountService.total$.pipe(
      first(),
      map(Boolean),
      tap((i) => {
        if (!i) {
          this.router.navigate([AppRoutes.Catalogue]);
        }
      })
    );
  }
}

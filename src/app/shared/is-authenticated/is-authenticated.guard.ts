import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppRoutes } from 'src/app/app-routing/app-routes.enum';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.userService.user$.pipe(
      map(Boolean),
      tap((i) => {
        if (!i) {
          this.router.navigate([AppRoutes.Home]);
        }
      })
    );
  }
}

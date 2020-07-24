import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { LoginDto } from '../dto/user/login.dto';
import { UserDto } from '../dto/user/user.dto';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apiService: ApiService, private userService: UserService) {}

  public login(login: LoginDto): Observable<UserDto> {
    return this.apiService.login(login).pipe(tap((user) => this.userService.setUser(user)));
  }

  public logout(): Observable<void> {
    return this.apiService.logout().pipe(
      tap(() => {
        console.log('logging out');
        this.userService.removeUser();
      })
    );
  }
}

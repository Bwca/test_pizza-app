import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserDto } from '../dto/user/user.dto';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserDto | null>(null);

  public get user$(): Observable<UserDto | null> {
    return this.user$$.asObservable();
  }

  public setUser(user: UserDto): void {
    this.user$$.next(user);
  }

  public removeUser(): void {
    this.user$$.next(null);
  }
}

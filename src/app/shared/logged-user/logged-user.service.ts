import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserDto } from '../dto/user/user.dto';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  private user$$ = new BehaviorSubject<UserDto | null>(null);

  constructor() {}

  public get currentUser$(): Observable<UserDto | null> {
    return this.user$$.asObservable();
  }
}

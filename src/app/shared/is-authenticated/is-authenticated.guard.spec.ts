import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { instance, mock } from 'ts-mockito';

import { UserService } from '../user/user.service';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('IsAuthenticatedGuard', () => {
  let userService: UserService;
  let router: Router;
  let guard: IsAuthenticatedGuard;

  beforeEach(() => {
    userService = mock(UserService);
    router = mock(Router);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useFactory: () => instance(userService),
        },
        {
          provide: Router,
          useFactory: () => instance(router),
        },
      ],
    });
    guard = TestBed.inject(IsAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

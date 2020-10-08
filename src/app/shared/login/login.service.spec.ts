import { TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { ApiService } from '../api/api.service';
import { UserService } from '../user/user.service';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let apiService: ApiService;
  let userService: UserService;
  let service: LoginService;

  beforeEach(() => {
    apiService = mock(ApiService);
    userService = mock(UserService);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useFactory: () => instance(apiService),
        },
        {
          provide: UserService,
          useFactory: () => instance(userService),
        },
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

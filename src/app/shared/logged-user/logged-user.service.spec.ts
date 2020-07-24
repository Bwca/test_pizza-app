import { TestBed } from '@angular/core/testing';

import { LoggedUserService } from './logged-user.service';

describe('UserServiceService', () => {
  let service: LoggedUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

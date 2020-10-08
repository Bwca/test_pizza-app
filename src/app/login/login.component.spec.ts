import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { instance, mock } from 'ts-mockito';

import { LoginService } from '../shared/login/login.service';
import { UserService } from '../shared/user/user.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let loginService: LoginService;
  let router: Router;
  let userService: UserService;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    loginService = mock(LoginService);
    router = mock(Router);
    userService = mock(UserService);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: LoginService,
          useFactory: () => instance(loginService),
        },
        {
          provide: Router,
          useFactory: () => instance(router),
        },
        {
          provide: UserService,
          useFactory: () => instance(userService),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

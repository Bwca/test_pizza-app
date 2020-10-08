import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { ApiService } from '../shared/api/api.service';
import { UserService } from '../shared/user/user.service';
import { OrdersHistoryComponent } from './orders-history.component';

describe('OrdersHistoryComponent', () => {
  let apiService: ApiService;
  let userService: UserService;
  let component: OrdersHistoryComponent;
  let fixture: ComponentFixture<OrdersHistoryComponent>;

  beforeEach(async(() => {
    apiService = mock(ApiService);
    userService = mock(UserService);
    TestBed.configureTestingModule({
      declarations: [OrdersHistoryComponent],
      imports: [RouterTestingModule],
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
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    when(apiService.getOrdersHistory()).thenReturn(of([]));
    when(userService.user$).thenReturn(of(null));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

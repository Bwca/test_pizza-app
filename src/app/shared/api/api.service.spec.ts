import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let http: HttpClient;
  let service: ApiService;

  beforeEach(() => {
    http = mock(HttpClient);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: () => instance(http),
        },
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

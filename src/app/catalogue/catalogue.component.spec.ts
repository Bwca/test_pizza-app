import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { ApiService } from '../shared/api/api.service';
import { CatalogueComponent } from './catalogue.component';

describe('CatalogueComponent', () => {
  let apiService: ApiService;
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(async(() => {
    apiService = mock(ApiService);
    TestBed.configureTestingModule({
      declarations: [CatalogueComponent],
      providers: [
        {
          provide: ApiService,
          useFactory: () => instance(apiService)
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

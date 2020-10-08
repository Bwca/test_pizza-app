import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRecordComponent } from './history-record.component';

describe('HistoryRecordComponent', () => {
  let component: HistoryRecordComponent;
  let fixture: ComponentFixture<HistoryRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryRecordComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

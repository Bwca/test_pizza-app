import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionButtonComponent } from './call-to-action-button.component';

describe('CallToActionButtonComponent', () => {
  let component: CallToActionButtonComponent;
  let fixture: ComponentFixture<CallToActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

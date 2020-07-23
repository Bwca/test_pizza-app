import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemViewComponent } from './cart-item-view.component';

describe('CartItemViewComponent', () => {
  let component: CartItemViewComponent;
  let fixture: ComponentFixture<CartItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { PizzaPriceService } from 'src/app/shared/pizza-price/pizza-price.service';
import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';
import { CataloguePreviewItemComponent } from './catalogue-preview-item.component';

describe('CataloguePreviewItemComponent', () => {
  let pizzaPriceService: PizzaPriceService;
  let shoppingCartService: ShoppingCartService;
  let component: CataloguePreviewItemComponent;
  let fixture: ComponentFixture<CataloguePreviewItemComponent>;

  beforeEach(async(() => {
    pizzaPriceService = mock(PizzaPriceService);
    shoppingCartService = mock(ShoppingCartService);
    TestBed.configureTestingModule({
      declarations: [CataloguePreviewItemComponent],
      providers: [
        {
          provide: PizzaPriceService,
          useFactory: () => instance(pizzaPriceService),
        },
        {
          provide: ShoppingCartService,
          useFactory: () => instance(shoppingCartService),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloguePreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { instance, mock } from 'ts-mockito';

import { PizzaPriceService } from 'src/app/shared/pizza-price/pizza-price.service';
import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';
import { CatalogueItemComponent } from './catalogue-item.component';

describe('CatalogueItemComponent', () => {
  let pizzaPriceService: PizzaPriceService;
  let shoppingCartService: ShoppingCartService;
  let component: CatalogueItemComponent;
  let fixture: ComponentFixture<CatalogueItemComponent>;

  beforeEach(async(() => {
    pizzaPriceService = mock(PizzaPriceService);
    shoppingCartService = mock(ShoppingCartService);
    TestBed.configureTestingModule({
      declarations: [CatalogueItemComponent],
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

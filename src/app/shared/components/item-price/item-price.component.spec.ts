import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { instance, mock, when } from 'ts-mockito';

import { CurrencyService } from '../../currency/currency.service';
import { CurrencyDto } from '../../dto/currency.dto';
import { ItemPriceComponent } from './item-price.component';

describe('ItemPriceComponent', () => {
  let currencyService: CurrencyService;
  let component: ItemPriceComponent;
  let fixture: ComponentFixture<ItemPriceComponent>;

  beforeEach(async(() => {
    currencyService = mock(CurrencyService);

    TestBed.configureTestingModule({
      declarations: [ItemPriceComponent],
      providers: [
        {
          provide: CurrencyService,
          useFactory: () => instance(currencyService)
        }
      ]
    }).compileComponents();
    when(currencyService.selectedCurrency$).thenReturn(of({} as CurrencyDto));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

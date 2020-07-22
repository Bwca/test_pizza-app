import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { CurrencyDto } from '../dto/currency.dto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private availableCurrencies$$ = new BehaviorSubject<CurrencyDto[]>([]);
  private selectedCurrency$$ = new Subject<CurrencyDto>();
  constructor(private apiService: ApiService) {
    this.loadCurrencues();
  }

  public get selectedCurrency$(): Observable<CurrencyDto> {
    return this.selectedCurrency$$.asObservable();
  }

  public get availableCurrencies$(): Observable<CurrencyDto[]> {
    return this.availableCurrencies$$.asObservable();
  }

  public setCurrency(currency: CurrencyDto): void {
    this.selectedCurrency$$.next(currency);
  }

  private loadCurrencues(): void {
    this.apiService.getCurrenciesDictionary().subscribe((currencies) => {
      this.availableCurrencies$$.next(currencies);
      this.setCurrency(currencies[environment.defaultCurrencyId]);
    });
  }
}

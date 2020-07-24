import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { CurrencyService } from '../currency/currency.service';
import { PriceDto } from '../dto/price.dto';

@Injectable({
  providedIn: 'root',
})
export class DeliveryCostsService {
  private deliveryCosts = new BehaviorSubject<PriceDto[] | null>(null);

  constructor(private currencyService: CurrencyService, private apiService: ApiService) {
    this.loadDeliveryCosts();
  }

  public get getDeliveryCost$(): Observable<number> {
    return combineLatest([this.deliveryCosts.asObservable().pipe(filter((i) => Boolean(i))), this.currencyService.selectedCurrency$]).pipe(
      map(([costs, currency]) => {
        const price = costs?.find((i) => i.currencyId === currency.id);
        if (!price) {
          throw new Error('No currency available!');
        }
        console.log(price);
        return price.amount;
      })
    );
  }

  private loadDeliveryCosts(): void {
    this.apiService.getDeliveryCosts().subscribe((deliveryCosts) => {
      this.deliveryCosts.next(deliveryCosts);
    });
  }
}

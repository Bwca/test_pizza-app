import { Component } from '@angular/core';

import { ApiService } from '../shared/api/api.service';
import { PizzaDto } from '../shared/dto/pizza.dto';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent {
  public pizzas$ = this.apiService.getPizzas();

  public pizzaForPreview: PizzaDto | undefined;

  constructor(private apiService: ApiService) {}

  public selectPizza(event: MouseEvent, pizza: PizzaDto): void {
    event.stopPropagation();
    this.pizzaForPreview = pizza;
  }

  public resetSelectedPizza(): void {
    this.pizzaForPreview = undefined;
  }
}

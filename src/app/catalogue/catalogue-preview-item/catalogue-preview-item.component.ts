import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { PizzaDto } from 'src/app/shared/dto/pizza.dto';
import { PizzaPriceService } from 'src/app/shared/pizza-price/pizza-price.service';
import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-catalogue-preview-item',
  templateUrl: './catalogue-preview-item.component.html',
  styleUrls: ['./catalogue-preview-item.component.scss'],
})
export class CataloguePreviewItemComponent {
  @Input() set item(pizza: PizzaDto) {
    this.pizza = pizza;
    this.price$ = this.pizzaPriceService.getPizzaPrice(pizza);
    this.resetCounter();
  }

  @Output() closePreview = new EventEmitter<void>();

  public pizza!: PizzaDto;
  public price$!: Observable<number>;
  public quantity = 1;

  constructor(private pizzaPriceService: PizzaPriceService, private shoppingCartService: ShoppingCartService) {}

  public increaseAmount(): void {
    this.quantity++;
  }

  public decreaseAmount(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  public addItemToCart(): void {
    this.shoppingCartService.addToCart(this.pizza, this.quantity);
    this.resetCounter();
  }

  private resetCounter(): void {
    this.quantity = 1;
  }
}

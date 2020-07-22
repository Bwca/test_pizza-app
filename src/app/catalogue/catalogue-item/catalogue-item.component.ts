import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PizzaDto } from 'src/app/shared/dto/pizza.dto';
import { PizzaPriceService } from 'src/app/shared/pizza-price/pizza-price.service';
import { ShoppingCartService } from 'src/app/shared/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss'],
})
export class CatalogueItemComponent {
  @Input() set item(pizza: PizzaDto) {
    this.pizza = pizza;
    this.price$ = this.pizzaPriceService.getPizzaPrice(pizza);
    this.quantityInShoppingCart$ = this.shoppingCartService.getQuantityInShoppingCart(
      pizza
    );
  }

  public pizza!: PizzaDto;
  public price$!: Observable<number>;
  public quantityInShoppingCart$!: Observable<number>;

  constructor(
    private pizzaPriceService: PizzaPriceService,
    private shoppingCartService: ShoppingCartService
  ) {}
}

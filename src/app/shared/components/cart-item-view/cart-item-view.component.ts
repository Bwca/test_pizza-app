import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PizzaDto } from '../../dto/pizza.dto';
import { PizzaPriceService } from '../../pizza-price/pizza-price.service';

@Component({
  selector: 'app-cart-item-view',
  templateUrl: './cart-item-view.component.html',
  styleUrls: ['./cart-item-view.component.scss'],
})
export class CartItemViewComponent {
  @Input() set item(pizza: PizzaDto) {
    this.cartItem = pizza;
    this.price$ = this.pizzaPriceService.getPizzaPrice$(pizza);
  }

  public cartItem!: PizzaDto;
  public price$!: Observable<number>;
  constructor(private pizzaPriceService: PizzaPriceService) {}
}

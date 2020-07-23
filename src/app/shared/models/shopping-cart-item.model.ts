import {PizzaDto} from '../dto/pizza.dto';

export interface ShoppingCartItem {
    item: PizzaDto;
    quantity: number;
}

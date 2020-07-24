import { OrderItemDto } from './order-item.dto';

export interface CreateOrderDto {
  name: string;
  phone: string;
  currencyId: number;
  orderedItems: OrderItemDto[];
}

import { OrderItemDto } from './order-item.dto';

export interface CreateOrderDto {
  name: string;
  phone: string;
  userId?: number;
  currencyId: number;
  orderedItems: OrderItemDto[];
}

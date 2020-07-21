import { OrderHistoryItemDto } from './order-history-item.dto';

export interface OrderHistoryDto {
  id: number;
  date: string;
  items: OrderHistoryItemDto[];
  total: string;
}

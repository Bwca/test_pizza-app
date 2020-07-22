import { PriceDto } from './price.dto';

export interface PizzaDto {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  prices: PriceDto[];
}

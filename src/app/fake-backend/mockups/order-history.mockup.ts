import { OrderDto } from '../../shared/dto/order.dto';

export const ORDER_HISTORY_MOCKUP: OrderDto[] = [
    {
        id: 1,
        date: '1990-12-12',
        items: ['Pizza', 'Some other pizza'],
        total: '$30.00'
    }
];

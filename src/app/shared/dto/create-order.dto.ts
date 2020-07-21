export interface CreateOrderDto {
    name: string;
    phone: string;
    userId?: number;
    currencyId: number;
    orderedItemsIds: number[];
}

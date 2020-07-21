import { PizzaDto } from '../../shared/dto/pizza.dto';

export const PIZZAS_MOCKUPS: PizzaDto[] = [
  {
    id: 1,
    name: 'responsive',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    imageUrl: 'http://dummyimage.com/300x300.jpg/dddddd/000000',
    prices: [
      {
        currencyId: 1,
        amount: 12.37,
      },
      {
        currencyId: 2,
        amount: 89.83,
      },
    ],
  },
  {
    id: 2,
    name: 'global',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    imageUrl: 'http://dummyimage.com/300x300.jpg/dddddd/000000',
    prices: [
      {
        currencyId: 1,
        amount: 18.55,
      },
      {
        currencyId: 2,
        amount: 12.33,
      },
    ],
  },
  {
    id: 3,
    name: 'infrastructure',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    imageUrl: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
    prices: [
      {
        currencyId: 1,
        amount: 59.12,
      },
      {
        currencyId: 2,
        amount: 29.47,
      },
    ],
  },
  {
    id: 4,
    name: 'knowledge base',
    description: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    imageUrl: 'http://dummyimage.com/300x300.bmp/5fa2dd/ffffff',
    prices: [
      {
        currencyId: 1,
        amount: 66.77,
      },
      {
        currencyId: 2,
        amount: 60.27,
      },
    ],
  },
  {
    id: 5,
    name: 'background',
    description: 'Vivamus vestibulum sagittis sapien.',
    imageUrl: 'http://dummyimage.com/300x300.png/dddddd/000000',
    prices: [
      {
        currencyId: 1,
        amount: 12.08,
      },
      {
        currencyId: 2,
        amount: 82.63,
      },
    ],
  },
  {
    id: 6,
    name: 'client-driven',
    description: 'Fusce posuere felis sed lacus.',
    imageUrl: 'http://dummyimage.com/300x300.bmp/cc0000/ffffff',
    prices: [
      {
        currencyId: 1,
        amount: 31.82,
      },
      {
        currencyId: 2,
        amount: 59.87,
      },
    ],
  },
  {
    id: 7,
    name: 'solution',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    imageUrl: 'http://dummyimage.com/300x300.jpg/5fa2dd/ffffff',
    prices: [
      {
        currencyId: 1,
        amount: 69.31,
      },
      {
        currencyId: 2,
        amount: 60.33,
      },
    ],
  },
  {
    id: 8,
    name: 'throughput',
    description: 'Cras pellentesque volutpat dui.',
    imageUrl: 'http://dummyimage.com/300x300.jpg/cc0000/ffffff',
    prices: [
      {
        currencyId: 1,
        amount: 52.54,
      },
      {
        currencyId: 2,
        amount: 26.5,
      },
    ],
  },
];

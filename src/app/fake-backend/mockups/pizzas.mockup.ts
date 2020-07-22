import { PizzaDto } from '../../shared/dto/pizza.dto';

export const PIZZAS_MOCKUPS: PizzaDto[] = [
  {
    id: 1,
    name: 'Smokey Shredded Pork',
    description:
      'Smokey barbecue base, free range shredded pork, chunky cut pineapple pieces garnished with fresh asian style slaw & garlic aioli',
    imageUrl: '/assets/pizza/WalterGs-Smokey-Shredded-Pork-380x380.jpg',
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
    name: 'Wild Caught Chili Prawn & Chorizo',
    description:
      'Tomato base, roma tomatoes, wild caught chili prawns, chorizo sausage, roasted red capsicum, fresh buffalo cheese topped with mozzarella garnished with fresh mixed herbs & a wedge of lemon',
    imageUrl: '/assets/pizza/WalterGs-Pawn-Chorizo-380x380.jpg',
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
    name: 'Wild Caught Garlic Prawn',
    description:
      'Tomato base, wild caught garlic prawns, roasted red capsicum, shallots, feta cheese topped with mozzarella garnished with fresh mixed herbs & a wedge of lemon',
    imageUrl: '/assets/pizza/WalterGs-Wild-Caught-Garlic-Prawn-380x380.jpg',
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
    name: 'Lamb Baa Baa',
    description: 'Tomato base, slow cooked grass fed lamb, spanish onion, grilled eggplant topped with mozzarella garnished with wild rocket & garlic yogurt',
    imageUrl: '/assets/pizza/WalterGs-Lamb-Baa-Baa-380x380.jpg',
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
    name: 'Round Supreme',
    description: 'Tomato base, free range smoked leg ham, chorizo sausage, pepperoni, mushrooms, fresh capsicum, spanish onion, chunky cut pineapple, olives topped with mozzarella',
    imageUrl: '/assets/pizza/WalterGs-Walters-Supreme-380x380.jpg',
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
    name: 'Meat Obsession',
    description: 'Smokey barbecue base, free range marinated chicken, free range smoked leg ham, pepperoni, chorizo sausage, grass fed ground beef, free range bacon topped with mozzarella',
    imageUrl: '/assets/pizza/WalterGs-Meat-Obsession-380x380.jpg',
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
    name: 'The Mayan',
    description:
      'Salsa base, chorizo sausage, spanish onion, red roasted capsicum, jalapeños, chili flakes topped with mozzarella and a side of avocado salsa, sour cream & corn chips',
    imageUrl: '/assets/pizza/WalterGs-Mayan-380x380.jpg',
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
    name: 'Veggie Patch',
    description: 'Tomato base, baby spinach, mushrooms, roasted red capsicum, grilled eggplant, cherry tomatoes, fresh buffalo cheese topped with mozzarella garnished with pesto aioli',
    imageUrl: '/assets/pizza/WalterGs-Veggie-Patch-380x380.jpg',
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

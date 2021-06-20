import { environment } from '@app/environments';
import { MarketState } from '@app/store';

export const MOCK_MARKET: MarketState = {
  shop: {
    products: [
      {
        id: '435436673423',
        title: 'luxury bag',
        description: 'product advertising banner luxury bag',
        quantity: 0,
        price: 17.5,
        totalPrice: 0,
        productImage: `${environment.imagePath}bag.jpg`,
        distributor: 'Some company Co',
      },
      {
        id: '23123435',
        title: 'sport shoes',
        description: 'modern black friday sale',
        quantity: 0,
        price: 100,
        totalPrice: 0,
        productImage: `${environment.imagePath}shoes.jpg`,
        distributor: 'Company Co',
      },
      {
        id: -3454,
        title: 'ketchup',
        description: 'tomato ketchup',
        quantity: 0,
        price: 7,
        totalPrice: 0,
        productImage: `${environment.imagePath}ketchup.png`,
        distributor: 'Distrubutor',
      },
    ],
  },
  basket: {
    totalPrice: 0,
    products: [],
  },
};

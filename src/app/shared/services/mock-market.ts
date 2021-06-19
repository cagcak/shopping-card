import { environment } from '@app/environments';
import { MarketState } from '@app/store';

export const MARKET: MarketState = {
  shop: {
    products: [
      {
        id: '435436673423',
        title: 'teeth whitening kit',
        description: 'colgate optic white teeth whitening kit',
        quantity: 0,
        price: 217.5,
        totalPrice: 0,
        productImage: `${environment.imagePath}colgate.jpg`,
        distributor: 'COLGATE',
      },
      {
        id: '23123435',
        title: 'chocolate biscuit',
        description: 'eti chocolate biscuit',
        quantity: 0,
        price: 100,
        totalPrice: 0,
        productImage: `${environment.imagePath}eti.jpg`,
        distributor: 'ETI',
      },
      {
        id: -3454,
        title: 'chocolate cake',
        description: 'kinder chocolate cake',
        quantity: 0,
        price: 7,
        totalPrice: 0,
        productImage: `${environment.imagePath}kinder.jpg`,
        distributor: 'KINDER',
      },
    ],
  },
  basket: {
    totalPrice: 0,
    products: [],
  },
};

import { createReducer, on } from '@ngrx/store';
import * as actions from './market.actions';
import { MarketState, Product } from './market.model';

export const initialState: MarketState = {
  shop: {
    products: [],
  },
  basket: {
    totalPrice: 0,
    products: [],
  },
};

export const shoppingShopReducer = createReducer(
  initialState,
  on(actions.productsLoaded, (state, { products }): MarketState => {
    const { shop } = state;

    return {
      ...state,
      shop: {
        ...shop,
        products: [...products],
      },
    };
  }),
  on(actions.add, (state, { product }): MarketState => {
    if (!product || !product.price) {
      console.warn('product not found or invalid product. no state action taken');
      return state;
    }

    const { basket, shop } = state;
    const productItem = { ...product, quantity: product.quantity + 1 };

    return {
      shop: {
        products: [
          ...shop.products.map((shopProduct) =>
            product.id === shopProduct.id ? { ...product, quantity: shopProduct.quantity + 1 } : shopProduct
          ),
        ],
      },
      basket: {
        totalPrice: basket.totalPrice + productItem.price,
        products: [...basket.products, { ...productItem, totalPrice: productItem.price }],
      },
    };
  }),
  on(actions.remove, (state, { productId }): MarketState => {
    const { basket, shop } = state;
    const product = (basket?.products || []).find((prod) => prod.id === productId);

    if (!product) {
      console.warn('product not found. no state action taken');
      return state;
    }

    return {
      shop: {
        products: shop.products.map((item) =>
          item.id === productId ? { ...item, quantity: 0, totalPrice: 0 } : item
        ),
      },
      basket: {
        totalPrice: basket.totalPrice - product.price,
        products: basket.products.filter((product) => product.id !== productId),
      },
    };
  }),
  on(actions.increment, (state, { productId }): MarketState => {
    const { basket, shop } = state || {};
    const product = (basket?.products || []).find((prod) => prod.id === productId);

    if (!product || !product?.price) {
      console.warn('product or price value not found. no state action taken');
      return state;
    }

    const products = basket.products.reduce((acc, curr) => {
      let newItem: typeof curr;

      if (curr.id === product.id) {
        newItem = {
          ...curr,
          quantity: curr.quantity + 1,
          totalPrice: curr.totalPrice + curr.price,
        };
      }

      return [...acc, newItem || curr];
    }, [] as Product[]);

    return {
      shop: {
        products: shop.products.map((shopProduct) =>
          product.id === shopProduct.id
            ? {
                ...product,
                price: shopProduct.price,
                quantity: shopProduct.quantity + 1,
              }
            : shopProduct
        ),
      },
      basket: {
        totalPrice: products.reduce((a, b) => a + (b.totalPrice || 0), 0),
        products,
      },
    };
  }),
  on(actions.decrement, (state, { productId }): MarketState => {
    const { basket, shop } = state || {};
    const product = (basket?.products || []).find((prod) => prod.id === productId);

    if (!product || !product?.price) {
      console.warn('product or price value not found. no state action taken');
      return state;
    }

    if (product.quantity < 2) {
      console.warn('product quantity is not enough to decrease from basket. no state action taken');
      return state;
    }

    const products = basket.products.reduce((acc, curr) => {
      let newItem: typeof curr;

      if (curr.id === product.id) {
        newItem = {
          ...curr,
          quantity: curr.quantity - 1,
          totalPrice: curr.totalPrice - curr.price,
        };
      }

      return [...acc, newItem || curr];
    }, [] as Product[]);

    return {
      shop: {
        products: shop.products.map((shopProduct) =>
          product.id === shopProduct.id
            ? {
                ...product,
                price: shopProduct.price,
                quantity: shopProduct.quantity - 1,
              }
            : shopProduct
        ),
      },
      basket: {
        totalPrice: products.reduce((a, b) => a + (b.totalPrice || 0), 0),
        products,
      },
    };
  }),
  on(actions.reset, (state) => {
    const { shop } = state;

    return {
      shop: {
        products: shop.products.map((product) => ({ ...product, quantity: 0, totalPrice: 0 })),
      },
      basket: {
        totalPrice: 0,
        products: [],
      },
    };
  })
);

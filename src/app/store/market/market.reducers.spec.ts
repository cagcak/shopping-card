import { MarketActionTypes } from '@app/shared';
import { MOCK_MARKET } from 'src/app/shared/services/mock-market';
import * as shoppingCardActions from './market.actions';
import { MarketState, Product, Shop } from './market.model';
import * as shoppingCardReducer from './market.reducers';

describe('shoppingCardReducer', () => {
  const getUpdatedBasketWithNewlyAddedProducts = (
    shop: Omit<Shop, 'totalPrice'>,
    ...products: Product[]
  ): MarketState => {
    return {
      shop,
      basket: {
        totalPrice: products.reduce((a, b) => a + (b.price || 0), 0),
        products: products.map((product) => ({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        })),
      },
    };
  };

  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = shoppingCardReducer;
      const action = {
        type: 'Unknown',
      };
      const state = shoppingCardReducer.shoppingCardReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('productsLoaded action', () => {
    it('should retrieve all products and update the state in an immutable way', () => {
      const { initialState } = shoppingCardReducer;
      const newProductsSlice: Product[] = MOCK_MARKET.shop.products;

      const action = shoppingCardActions.productsLoaded({ products: newProductsSlice });
      const state = shoppingCardReducer.shoppingCardReducer(initialState, action);

      expect(action.type).toBe(MarketActionTypes.PRODUCTS_LOADED);
      expect(state.shop.products).toEqual(newProductsSlice);
      expect(state.shop.products).not.toBe(newProductsSlice);
    });
  });

  describe('add action', () => {
    it('should add a product from shop to basket and update quantity with total price value', () => {
      const { initialState } = shoppingCardReducer;
      const { shop, basket } = MOCK_MARKET;

      const action = shoppingCardActions.add({ product: shop.products[0] });
      const state = shoppingCardReducer.shoppingCardReducer(initialState, action);

      expect(action.type).toBe(MarketActionTypes.ADD_PRODUCT_TO_BASKET);
      expect(state.basket.products).toBeInstanceOf(Array);
      expect(state.basket.products.length).toBe(1);
      expect(state.basket.products[0].quantity).toBe(action.product.quantity + 1);
      expect(state.basket.products[0].totalPrice).not.toBe(action.product.totalPrice);
      expect(state.basket.products).not.toBe(basket.products);
    });
  });

  describe('remove action', () => {
    it('should remove the product from basket and update quantity with total price value', () => {
      const { shop, basket } = MOCK_MARKET;

      const updatedBasket = getUpdatedBasketWithNewlyAddedProducts(shop, shop.products[0], shop.products[1]);

      const action = shoppingCardActions.remove({ productId: updatedBasket.basket.products[1].id });
      const state = shoppingCardReducer.shoppingCardReducer(updatedBasket, action);

      expect(action.type).toBe(MarketActionTypes.REMOVE_PRODUCT_TO_BASKET);
      expect(state.basket.products).toBeInstanceOf(Array);
      expect(state.basket.products.length).toBe(1);
      expect(state.basket.totalPrice).not.toBe(shop.products[0].price + shop.products[1].price);
      expect(state.basket.totalPrice).toBe(shop.products[0].price);
      expect(state.basket.products).not.toBe(basket.products);
    });
  });

  describe('increment action', () => {
    it('should increment the product quantity from shop and let reflects to basket', () => {
      const { shop, basket } = MOCK_MARKET;

      const updatedBasket = getUpdatedBasketWithNewlyAddedProducts(shop, shop.products[0], shop.products[1]);

      const action = shoppingCardActions.increment({ productId: updatedBasket.basket.products[1].id });
      const state = shoppingCardReducer.shoppingCardReducer(updatedBasket, action);

      expect(action.type).toBe(MarketActionTypes.INCREMENT_PRODUCT_ON_BASKET);
      expect(state.basket.products).toBeInstanceOf(Array);
      expect(state.basket.products.length).toBe(2);
      expect(state.basket.totalPrice).toBe(shop.products[0].price + shop.products[1].price * 2);
      expect(state.basket.products).not.toBe(basket.products);
    });
  });

  describe('decrement action', () => {
    it('should decrement the product quantity from shop and let reflects to basket', () => {
      const stateWithDecrementableProduct = {
        shop: {
          products: [
            {
              id: '435436673423',
              title: 'luxury bag',
              description: 'product advertising banner luxury bag',
              quantity: 1,
              price: 17.5,
              totalPrice: 0,
              productImage: 'assets/images/bag.jpg',
              distributor: 'Some company Co',
            },
            {
              id: '23123435',
              title: 'sport shoes',
              description: 'modern black friday sale',
              quantity: 5,
              price: 100,
              totalPrice: 400,
              productImage: 'assets/images/shoes.jpg',
              distributor: 'Company Co',
            },
            {
              id: -3454,
              title: 'ketchup',
              description: 'tomato ketchup',
              quantity: 0,
              price: 7,
              totalPrice: 0,
              productImage: 'assets/images/ketchup.png',
              distributor: 'Distrubutor',
            },
          ],
        },
        basket: {
          totalPrice: 517.5,
          products: [
            {
              id: '23123435',
              title: 'sport shoes',
              description: 'modern black friday sale',
              quantity: 5,
              price: 100,
              totalPrice: 500,
              productImage: 'assets/images/shoes.jpg',
              distributor: 'Company Co',
            },
            {
              id: '435436673423',
              title: 'luxury bag',
              description: 'product advertising banner luxury bag',
              quantity: 1,
              price: 17.5,
              totalPrice: 17.5,
              productImage: 'assets/images/bag.jpg',
              distributor: 'Some company Co',
            },
          ],
        },
      };

      const action = shoppingCardActions.decrement({
        productId: stateWithDecrementableProduct.basket.products[0].id,
      });
      const state = shoppingCardReducer.shoppingCardReducer(stateWithDecrementableProduct, action);

      expect(action.type).toBe(MarketActionTypes.DECREMENT_PRODUCT_ON_BASKET);
      expect(state.basket.products).toBeInstanceOf(Array);
      expect(state.basket.products.length).toBe(2);
      expect(state.basket.totalPrice).toBe(
        stateWithDecrementableProduct.basket.products[1].price +
          stateWithDecrementableProduct.basket.products[0].price * 4
      );
    });
  });

  describe('reset action', () => {
    it('should clear basket and turn back to initial state', () => {
      const { shop } = MOCK_MARKET;

      const updatedBasket = getUpdatedBasketWithNewlyAddedProducts(shop, shop.products[0], shop.products[1]);

      const action = shoppingCardActions.reset();
      const state = shoppingCardReducer.shoppingCardReducer(updatedBasket, action);

      expect(action.type).toBe(MarketActionTypes.RESET_BASKET);
      expect(state.basket.products).toBeInstanceOf(Array);
      expect(state.basket.products.length).toBe(0);
      expect(state.basket.totalPrice).toBe(0);
      expect(state.shop.products.every((p) => p.quantity === 0)).toBeTruthy();
      expect(state.shop.products.every((p) => p.totalPrice === 0)).toBeTruthy();
    });
  });
});

import { MOCK_MARKET } from '../../shared/services/mock-market';
import { selectBasket, selectBasketProducts, selectShop, selectShopProducts } from './market.selectors';

describe('Selectors: MarketFeature', () => {
  const mockState = MOCK_MARKET;

  it('should select shop slice of state', () => {
    const result = selectShop.projector(mockState);

    expect(result.products.length).toEqual(3);
    expect(result.products[1].id).toEqual('23123435');
  });

  it('should select basket slice of state', () => {
    const result = selectBasket.projector(mockState);

    expect(result.products.length).toEqual(0);
    expect(result.totalPrice).toEqual(0);
  });

  it('should select shop products slice of state', () => {
    const result = selectShopProducts.projector(mockState.shop);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(3);
    expect(result[0].quantity).toEqual(0);
  });

  it('should select basket products slice of state', () => {
    const result = selectBasketProducts.projector(mockState.basket);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(0);
  });
});

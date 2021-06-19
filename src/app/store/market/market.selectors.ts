import { StoreKeys } from '@app/shared';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketState } from './market.model';

export const selectMarketFeature = createFeatureSelector<MarketState>(StoreKeys.MARKET_STORE);

export const selectShop = createSelector(selectMarketFeature, (state: MarketState) => state?.shop);
export const selectBasket = createSelector(selectMarketFeature, (state: MarketState) => state?.basket);

export const selectShopProducts = createSelector(selectShop, (shop) => shop?.products);
export const selectBasketProducts = createSelector(selectBasket, (basket) => basket?.products);

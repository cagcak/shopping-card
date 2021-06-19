import { MarketActionTypes } from '@app/shared';
import { createAction, props } from '@ngrx/store';
import { Product } from './market.model';

export const loadProducts = createAction(MarketActionTypes.LOAD_PRODUCTS);
export const productsLoaded = createAction(
  MarketActionTypes.PRODUCTS_LOADED,
  props<{ products: Product[] }>()
);

export const add = createAction(MarketActionTypes.ADD_PRODUCT_TO_BASKET, props<{ product: Product }>());
export const remove = createAction(
  MarketActionTypes.REMOVE_PRODUCT_TO_BASKET,
  props<{ productId: number | string }>()
);
export const increment = createAction(
  MarketActionTypes.INCREMENT_PRODUCT_ON_BASKET,
  props<{ productId: number | string }>()
);
export const decrement = createAction(
  MarketActionTypes.DECREMENT_PRODUCT_ON_BASKET,
  props<{ productId: number | string }>()
);
export const reset = createAction(MarketActionTypes.RESET_BASKET);

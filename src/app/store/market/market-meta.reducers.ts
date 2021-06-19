import { environment } from '@app/environments';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { MarketState } from './market.model';

export function debug(reducer: ActionReducer<MarketState>): ActionReducer<MarketState> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const marketMetaReducers: MetaReducer<MarketState>[] = environment.production ? [] : [debug];

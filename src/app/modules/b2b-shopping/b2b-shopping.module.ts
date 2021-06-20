import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule, StoreKeys } from '@app/shared';
import { MarketEffects, marketMetaReducers, shoppingCardReducer } from '@app/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { B2bShoppingRoutingModule } from './b2b-shopping.routing.module';
import { MarketProductDetailComponent, MarketProductsComponent } from './components';

@NgModule({
  imports: [
    B2bShoppingRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(StoreKeys.MARKET_STORE, shoppingCardReducer, { metaReducers: marketMetaReducers }),
    EffectsModule.forFeature([MarketEffects]),
  ],
  declarations: [MarketProductDetailComponent, MarketProductsComponent],
})
export class B2bShoppingModule {}

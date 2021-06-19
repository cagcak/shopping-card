import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarketState, selectShopProducts } from '@app/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-market-products',
  templateUrl: './market-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketProductsComponent {
  products$ = this.store.pipe(select(selectShopProducts));

  constructor(private store: Store<MarketState>) {}
}

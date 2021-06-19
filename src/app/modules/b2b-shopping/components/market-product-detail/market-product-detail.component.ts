import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { add, decrement, increment, MarketState, Product, remove } from '@app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-market-product-detail',
  templateUrl: './market-product-detail.component.html',
  styleUrls: ['./market-product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketProductDetailComponent {
  @Input()
  product: Product;

  MARKET_ACTIONS = {
    add: { title: 'Add to basket', icon: 'shopping_basket' },
    remove: { title: 'Remove from basket', icon: 'delete' },
    increase: { title: 'Increase Item', icon: 'add_circle' },
    decrease: { title: 'Decrease Item', icon: 'remove_circle' },
  };

  constructor(private store: Store<MarketState>) {}

  get productIconStyle(): { [key: string]: string } {
    return {
      backgroundImage: `url(${this.product.productImage})`,
      backgroundSize: 'cover',
    };
  }

  addItemToBasket(): void {
    this.store.dispatch(add({ product: this.product }));
  }

  removeItemFromBasket(): void {
    this.store.dispatch(remove({ productId: this.product.id }));
  }

  increaseItemAtBasket(): void {
    this.store.dispatch(increment({ productId: this.product.id }));
  }

  decreaseItemAtBasket(): void {
    this.store.dispatch(decrement({ productId: this.product.id }));
  }
}

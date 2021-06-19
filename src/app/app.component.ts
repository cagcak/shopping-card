import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { MarketState, reset, selectBasket, selectMarketFeature, selectShop } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'shopping-card';
  selectBasket$ = this.store.pipe(select(selectBasket));
  selectShop$ = this.store.pipe(select(selectShop));

  constructor(private store: Store<{ market: MarketState }>, private snackBar: MatSnackBar) {}

  onResetBasket(): void {
    this.store
      .pipe(select(selectMarketFeature))
      .pipe(
        tap(() => this.store.dispatch(reset())),
        map(
          ({ basket, shop }) =>
            shop.products.every(({ quantity, totalPrice }) => quantity === 0 && totalPrice === 0) &&
            basket.products.length === 0 &&
            basket.totalPrice === 0
        ),
        take(1)
      )
      .subscribe((isBasketCleared) => isBasketCleared && this.openSnackBar('Shopping card cleared'));
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Info', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}

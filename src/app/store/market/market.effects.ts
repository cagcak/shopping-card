import { Injectable } from '@angular/core';
import { MarketActionTypes, ProductService } from '@app/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class MarketEffects {
  constructor(private actions: Actions, private productService: ProductService) {}

  loadProducts = createEffect(() =>
    this.actions.pipe(
      ofType(MarketActionTypes.LOAD_PRODUCTS),
      mergeMap(() =>
        this.productService.loadProducts().pipe(
          map((products) => ({ type: MarketActionTypes.PRODUCTS_LOADED, products })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}

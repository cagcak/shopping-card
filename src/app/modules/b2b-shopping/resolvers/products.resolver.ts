import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { loadProducts, MarketState } from '@app/store';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class ProductsResolver implements Resolve<null> {
  constructor(private store: Store<MarketState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<null> {
    return of(this.store.dispatch(loadProducts())).pipe(mapTo(null));
  }
}

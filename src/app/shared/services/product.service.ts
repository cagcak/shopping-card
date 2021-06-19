import { Injectable } from '@angular/core';
import { Product } from '@app/store';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { MARKET } from './mock-market';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  loadProducts(): Observable<Product[]> {
    return of(MARKET.shop.products).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      delay(750)
    );
  }
}

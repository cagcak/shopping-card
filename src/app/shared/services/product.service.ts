import { Injectable } from '@angular/core';
import { Product } from '@app/store';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { MOCK_MARKET } from './mock-market';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  loadProducts(): Observable<Product[]> {
    return of(MOCK_MARKET.shop.products).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      delay(750)
    );
  }
}

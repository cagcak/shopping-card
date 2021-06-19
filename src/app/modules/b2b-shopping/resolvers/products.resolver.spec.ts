import { inject, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ProductsResolver } from './products.resolver';

describe('Service: Products', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [ProductsResolver, Store],
    });
  });

  it('should ...', inject([ProductsResolver], (service: ProductsResolver) => {
    expect(service).toBeTruthy();
  }));
});

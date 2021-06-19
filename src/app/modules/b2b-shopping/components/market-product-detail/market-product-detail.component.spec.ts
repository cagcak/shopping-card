import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MarketProductDetailComponent } from './market-product-detail.component';

describe('MarketProductDetailComponent', () => {
  let component: MarketProductDetailComponent;
  let fixture: ComponentFixture<MarketProductDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot({})],
        declarations: [MarketProductDetailComponent],
        providers: [Store],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

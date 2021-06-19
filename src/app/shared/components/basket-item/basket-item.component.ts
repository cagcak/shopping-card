import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@app/store';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketItemComponent {
  @Input()
  product: Product;
}

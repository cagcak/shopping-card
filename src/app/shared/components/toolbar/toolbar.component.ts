import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from '@app/store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [`./toolbar.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input()
  selectBasket: Shop;

  @Output()
  resetBasket: EventEmitter<MouseEvent> = new EventEmitter();
}

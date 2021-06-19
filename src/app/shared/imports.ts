import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { BasketItemComponent, ToolbarComponent } from './components';
import { ProductService } from './services';

export const MATERIAL_MODULES = [
  FlexLayoutModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatRippleModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
];

export const SERVICES = [ProductService];

export const COMPONENTS = [ToolbarComponent, BasketItemComponent];

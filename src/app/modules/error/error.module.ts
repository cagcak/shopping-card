import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ErrorComponent],
})
export class ErrorModule {}

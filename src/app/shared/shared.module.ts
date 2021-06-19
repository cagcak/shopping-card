import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { COMPONENTS, MATERIAL_MODULES, SERVICES } from './imports';

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
  exports: [CommonModule, ...MATERIAL_MODULES, ...COMPONENTS],
})
export class SharedModule {}

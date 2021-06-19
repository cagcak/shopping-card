import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B2bShoppingModule } from './modules/b2b-shopping/b2b-shopping.module';
import { SharedModule } from './shared/shared.module';

const FEATURE_MODULES = [B2bShoppingModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    ...FEATURE_MODULES,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

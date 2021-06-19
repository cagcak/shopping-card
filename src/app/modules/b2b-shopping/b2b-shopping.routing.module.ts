import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketProductDetailComponent, MarketProductsComponent } from './components';
import { ProductsResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: MarketProductsComponent,
    resolve: { resolver: ProductsResolver },
  },
  {
    path: 'product',
    children: [
      {
        path: ':id',
        component: MarketProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ProductsResolver],
  exports: [RouterModule],
})
export class B2bShoppingRoutingModule {}

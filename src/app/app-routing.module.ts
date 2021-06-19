import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'market',
  },
  {
    path: 'market',
    loadChildren: () => import('./modules/b2b-shopping/b2b-shopping.module').then((m) => m.B2bShoppingModule),
  },
  {
    path: '*',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

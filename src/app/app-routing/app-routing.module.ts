import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app-routes.enum';

const routes: Routes = [
  {
    path: AppRoutes.Catalogue,
    loadChildren: () => import('../catalogue/catalogue.module').then((m) => m.CatalogueModule),
  },
  {
    path: AppRoutes.Login,
    loadChildren: () => import('../login/login.module').then((m) => m.LoginModule),
  },
  {
    path: AppRoutes.OrdersHistory,
    loadChildren: () => import('../orders-history/orders-history.module').then((m) => m.OrdersHistoryModule),
  },
  {
    path: AppRoutes.PlaceOrder,
    loadChildren: () => import('../place-order/place-order.module').then((m) => m.PlaceOrderModule),
  },
  {
    path: AppRoutes.ShoppingCart,
    loadChildren: () => import('../shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
  },
  { path: '', redirectTo: `/${AppRoutes.Catalogue}`, pathMatch: 'full' },
  {
    path: AppRoutes.NotFound,
    redirectTo: AppRoutes.Home,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

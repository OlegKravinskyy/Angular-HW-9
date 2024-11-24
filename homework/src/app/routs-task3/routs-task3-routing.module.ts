import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { RoutsTask3Component } from '../routs-task3/routs-task3.component';

const routes: Routes = [
  {
    path: '',
    component: RoutsTask3Component,
    children: [{ path: 'products', component: ProductsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutsTask3RoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutsTask1Component } from './routs-task1/routs-task1.component';
import { RoutsTask3Component } from './routs-task3/routs-task3.component';
import { RoutsTask4Component } from './routs-task4/routs-task4.component';
import { Feature1Component } from './routs-task1/feature1/feature1.component';
import { Feature2Component } from './routs-task1/feature2/feature2.component';
import { Page404Component } from './page404/page404.component';
import { ProductsListComponent } from './routs-task3/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'task1', pathMatch: 'full' },
  {
    path: 'task1',
    component: RoutsTask1Component,
    children: [
      { path: 'feature1', component: Feature1Component },
      { path: 'feature2', component: Feature2Component },
    ],
  },
  {
    path: 'task2',
    loadChildren: () =>
      import('./routs-task2/routs-task2.module').then(
        (m) => m.RoutsTask2Module
      ),
  },
  {
    path: 'task3',
    loadChildren: () =>
      import('./routs-task3/routs-task3.module').then(
        (m) => m.RoutsTask3Module
      ),
  },
  {
    path: 'task4',
    loadChildren: () =>
      import('./routs-task4/routs-task4.module').then(
        (m) => m.RoutsTask4Module
      ),
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

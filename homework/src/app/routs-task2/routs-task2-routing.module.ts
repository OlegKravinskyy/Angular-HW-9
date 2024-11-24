import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutsTask2Component } from './routs-task2.component';

const routes: Routes = [
  {
    path: '',
    component: RoutsTask2Component,
    children: [
      {
        path: 'lazyload-first',
        loadChildren: () =>
          import('./lazyload-first/lazyload-first.module').then(
            (m) => m.LazyloadFirstModule
          ),
      },
      {
        path: 'lazyload-second',
        loadChildren: () =>
          import('./lazyload-second/lazyload-second.module').then(
            (m) => m.LazyloadSecondModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutsTask2RoutingModule {}

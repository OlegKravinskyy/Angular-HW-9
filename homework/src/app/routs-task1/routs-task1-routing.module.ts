import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutsTask1Component } from './routs-task1.component';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';

const routes: Routes = [
  {
    path: '',
    component: RoutsTask1Component,
    children: [
      { path: 'feature1', component: Feature1Component },
      { path: 'feature2', component: Feature2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutsTask1RoutingModule {}

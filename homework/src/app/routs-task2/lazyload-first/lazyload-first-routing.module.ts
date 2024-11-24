import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadFirstComponent } from './lazyload-first.component';

const routes: Routes = [
  {
    path: '',
    component: LazyloadFirstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyloadFirstRoutingModule {}

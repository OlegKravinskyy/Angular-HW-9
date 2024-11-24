import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadSecondComponent } from './lazyload-second.component';

const routes: Routes = [
  {
    path: '',
    component: LazyloadSecondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyloadSecondRoutingModule {}

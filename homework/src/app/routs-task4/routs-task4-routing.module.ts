import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RoutsTask4Component } from './routs-task4.component';
import { ModeratorComponent } from './component/moderator/moderator.component';

const routes: Routes = [
  {
    path: '',
    component: RoutsTask4Component,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'moderator', component: ModeratorComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutsTask4RoutingModule {}

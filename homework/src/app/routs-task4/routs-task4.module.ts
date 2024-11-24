import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutsTask4RoutingModule } from './routs-task4-routing.module';
import { LoginComponent } from './component/login/login.component';
import { ModeratorComponent } from './component/moderator/moderator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ModeratorComponent],
  imports: [CommonModule, FormsModule, RoutsTask4RoutingModule],
})
export class RoutsTask4Module {}

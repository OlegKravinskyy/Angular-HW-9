import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutsTask3RoutingModule } from './routs-task3-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [FilterComponent, ProductsListComponent],
  imports: [CommonModule, RoutsTask3RoutingModule],
})
export class RoutsTask3Module {}

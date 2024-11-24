import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadFirstRoutingModule } from './lazyload-first-routing.module';
import { LazyloadFirstComponent } from './lazyload-first.component';

@NgModule({
  declarations: [LazyloadFirstComponent],
  imports: [CommonModule, LazyloadFirstRoutingModule],
})
export class LazyloadFirstModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadSecondRoutingModule } from './lazyload-second-routing.module';
import { LazyloadSecondComponent } from './lazyload-second.component';

@NgModule({
  declarations: [LazyloadSecondComponent],
  imports: [CommonModule, LazyloadSecondRoutingModule],
})
export class LazyloadSecondModule {}

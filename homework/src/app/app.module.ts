import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutsTask1Component } from './routs-task1/routs-task1.component';
import { RoutsTask3Component } from './routs-task3/routs-task3.component';
import { RoutsTask4Component } from './routs-task4/routs-task4.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutsTask1Component,
    RoutsTask3Component,
    RoutsTask4Component,
    Page404Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

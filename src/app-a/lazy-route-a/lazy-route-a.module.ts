import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRouteARoutingModule } from './lazy-route-a-routing.module';
import { LazyRouteAComponent } from './lazy-route-a/lazy-route-a.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRouteARoutingModule
  ],
  declarations: [LazyRouteAComponent]
})
export class LazyRouteAModule { }

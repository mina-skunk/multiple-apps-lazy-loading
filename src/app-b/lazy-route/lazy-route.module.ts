import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRouteRoutingModule } from './lazy-route-routing.module';
import { LazyRouteComponent } from './lazy-route/lazy-route.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRouteRoutingModule
  ],
  declarations: [LazyRouteComponent]
})
export class LazyRouteModule { }

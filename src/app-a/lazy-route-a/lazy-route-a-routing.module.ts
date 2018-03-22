import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRouteAComponent } from './lazy-route-a/lazy-route-a.component';

const routes: Routes = [
  { path: '', component: LazyRouteAComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRouteARoutingModule { }

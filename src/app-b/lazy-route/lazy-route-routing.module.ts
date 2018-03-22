import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRouteComponent } from './lazy-route/lazy-route.component';

const routes: Routes = [
  { path: '', component: LazyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRouteRoutingModule { }

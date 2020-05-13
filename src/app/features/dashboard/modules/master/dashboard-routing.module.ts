// imports components
import { DashboardMasterComponent } from './containers/dashboard-master/dashboard-master.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// declare routes
const routes = [
  { path: '', component: DashboardMasterComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DashboardModuleRouting {}
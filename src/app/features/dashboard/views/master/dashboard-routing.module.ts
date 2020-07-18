// imports components
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component';

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
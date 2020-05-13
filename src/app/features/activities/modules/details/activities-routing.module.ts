import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityMasterComponent } from './components/activity-master/activity-master.component';

// imports components


// declare routes
const routes: Routes = [
  { path: '', component: ActivityMasterComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class ActivitiesModuleRouting {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityMasterComponent } from './components/activity-master/activity-master.component';
import { ActivitiesModuleRouting } from './activities-routing.module';



@NgModule({
  declarations: [
    ActivityMasterComponent
  ],
  imports: [
    CommonModule,
    ActivitiesModuleRouting
  ]
})
export class ActivitiesModule { }

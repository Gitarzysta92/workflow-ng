import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components

// import routing module
import { DashboardModuleRouting } from './dashboard-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component';





@NgModule({
  declarations: [
    DashboardMasterComponent,
  ],
  imports: [
    SharedModule,
    DashboardModule,
    DashboardModuleRouting,
    CommonModule
  ],
  providers: []
})



export class DashboardModule {}
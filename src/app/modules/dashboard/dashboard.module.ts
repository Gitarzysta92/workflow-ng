import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component'

// import routing module
import { RoutesModule } from './dashboard-routing.module';

import './dashboard-registry.module';

@NgModule({
  declarations: [
    DashboardMasterComponent
  ],
  imports: [
    RoutesModule,
    CommonModule
  ],
  providers: []
})



export class DashboardModule {}
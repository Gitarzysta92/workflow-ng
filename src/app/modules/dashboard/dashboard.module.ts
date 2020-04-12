import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { DashboardMasterComponent } from './components/containers/dashboard-master/dashboard-master.component'

// import routing module
import { RoutesModule } from './dashboard.routing';

import './dashboard.registry';
import { DashboardTileComponent } from './components/presentational/dashboard-tile/dashboard-tile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewestActivitiesComponent } from './components/presentational/newest-activities/newest-activities.component';
import { PinnedActivitiesComponent } from './components/presentational/pinned-activities/pinned-activities.component';



@NgModule({
  declarations: [
    DashboardMasterComponent,
    DashboardTileComponent,
    NewestActivitiesComponent,
    PinnedActivitiesComponent,
  ],
  imports: [
    SharedModule,
    RoutesModule,
    CommonModule
  ],
  providers: []
})



export class DashboardModule {}
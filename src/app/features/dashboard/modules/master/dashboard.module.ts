import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components

// import routing module
import { DashboardModuleRouting } from './dashboard-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardMasterComponent } from '../../components/containers/dashboard-master/dashboard-master.component';
import { DashboardTileComponent } from '../../components/presentational/dashboard-tile/dashboard-tile.component';
import { NewestActivitiesComponent } from '../../components/presentational/newest-activities/newest-activities.component';
import { PinnedActivitiesComponent } from '../../components/presentational/pinned-activities/pinned-activities.component';
import { DashboardTopBarComponent } from '../../components/presentational/dashboard-top-bar/dashboard-top-bar.component';




@NgModule({
  declarations: [
    DashboardMasterComponent,
    DashboardTileComponent,
    NewestActivitiesComponent,
    PinnedActivitiesComponent,
    DashboardTopBarComponent,
  ],
  imports: [
    SharedModule,
    DashboardModuleRouting,
    CommonModule
  ],
  providers: []
})



export class DashboardModule {}
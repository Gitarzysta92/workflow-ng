import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import './dashboard.registry';
import { FormsModule } from '@angular/forms';
import { DashboardTileComponent } from './components/presentational/dashboard-tile/dashboard-tile.component';
import { NewestActivitiesComponent } from './components/presentational/newest-activities/newest-activities.component';
import { PinnedActivitiesComponent } from './components/presentational/pinned-activities/pinned-activities.component';
import { DashboardTopBarComponent } from './components/presentational/dashboard-top-bar/dashboard-top-bar.component';

@NgModule({
  declarations: [
    DashboardTileComponent,
    NewestActivitiesComponent,
    PinnedActivitiesComponent,
    DashboardTopBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardTileComponent,
    NewestActivitiesComponent,
    PinnedActivitiesComponent,
    DashboardTopBarComponent
  ],
  entryComponents: [

  ]
})



export class DashboardModule {}
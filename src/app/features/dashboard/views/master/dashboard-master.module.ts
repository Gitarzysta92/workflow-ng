import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components

// import routing module
import { DashboardMasterModuleRouting } from './dashboard-master-routing.module';
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component';
import { DashboardModule } from '../../dashboard.module';
import { PinnedTileComponent } from './components/pinned-tile/pinned-tile.component';
import { DiscussionWidgetModule } from 'src/app/features/discussions/widgets/discussion-widgets.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PinnedActivitiesComponent } from './components/pinned-activities/pinned-activities.component';
import { NewestActivitiesComponent } from './components/newest-activities/newest-activities.component';
import { DashboardTopBarComponent } from './components/dashboard-top-bar/dashboard-top-bar.component';





@NgModule({
  declarations: [
    DashboardMasterComponent,
    PinnedTileComponent,
    PinnedActivitiesComponent,
    NewestActivitiesComponent,
    DashboardTopBarComponent
  ],
  imports: [
    DashboardModule,
    DashboardMasterModuleRouting,
    CommonModule,
    DiscussionWidgetModule
  ],
  providers: []
})



export class DashboardMasterModule {}
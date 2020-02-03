import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { DashboardMasterComponent } from './components/containers/dashboard-master/dashboard-master.component'

// import routing module
import { RoutesModule } from './dashboard-routing.module';

import './dashboard-registry.module';
import { DashboardTileComponent } from './components/presentational/dashboard-tile/dashboard-tile.component';

@NgModule({
  declarations: [
    DashboardMasterComponent,
    DashboardTileComponent
  ],
  imports: [
    RoutesModule,
    CommonModule
  ],
  providers: []
})



export class DashboardModule {}
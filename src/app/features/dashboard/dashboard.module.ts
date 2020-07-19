import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import './dashboard.registry';
import { FormsModule } from '@angular/forms';
import { DashboardTileComponent } from './components/presentational/dashboard-tile/dashboard-tile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardTileComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DashboardTileComponent,
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [

  ]
})



export class DashboardModule {}
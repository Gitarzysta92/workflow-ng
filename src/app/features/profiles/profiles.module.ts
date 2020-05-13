import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import './profiles.registry';
import { UserProfileTileComponent } from './widgets/user-profile-tile/user-profile-tile.component';

@NgModule({
  declarations: [
    UserProfileTileComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    UserProfileTileComponent
  ]
})



export class ProfilesModule {}
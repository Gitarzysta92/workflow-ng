import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RoutesModule } from './user-profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileTileComponent } from './components/user-profile-tile/user-profile-tile.component';

import './user-profile-registry.module';


@NgModule({
  declarations: [
    UserProfileComponent, 
    UserProfileTileComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    UserProfileTileComponent
  ]
})
export class UserProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsModuleRouting } from './profile-details-routing.module';

import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent, 
  ],
  imports: [
    CommonModule,
    ProfileDetailsModuleRouting
  ],
})
export class UserProfileModule { }

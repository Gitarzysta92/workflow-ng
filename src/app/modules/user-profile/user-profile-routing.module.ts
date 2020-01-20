import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';


// imports components
import { UserProfileComponent } from './components/user-profile/user-profile.component';


// declare routes
const routes: Routes = [
  { path: 'profile', component: UserProfileComponent }
]

export const RoutesModule = routes;

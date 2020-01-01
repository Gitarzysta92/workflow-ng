import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';


// imports components
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component'


// declare routes
const routes: Routes = [
  { path: '', component: SidebarViewComponent }
]

export const RoutesModule = RouterModule.forChild(routes);

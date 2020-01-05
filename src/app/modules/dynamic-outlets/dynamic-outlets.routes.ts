import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';


// imports components
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component'


// declare routes
const routes: Routes = [
  { path: 'left-sidebar', component: SidebarViewComponent, outlet: 'app-view-left-sidebar'},
  { path: 'right-sidebar', component: SidebarViewComponent, outlet: 'app-view-right-sidebar'},
]

export const DynamicOutletsRoutes = routes;

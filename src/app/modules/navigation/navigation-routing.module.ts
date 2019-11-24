import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { MainMenuComponent } from './components/main-menu/main-menu.component';


// declare routes
const routes = [];

// Register component in sidebar
SharedRegistryService.createRecord({
  key: 'sidebar-left',
  data: {
    name: 'Main menu',
    path: '**',
    component: MainMenuComponent
  }
})






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavigationModuleRouting {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports components
import { MainMenuComponent } from './components/main-menu/main-menu.component';

// declare routes
const routes = [];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavigationModuleRouting {}
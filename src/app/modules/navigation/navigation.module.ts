import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { MainMenuComponent } from './components/main-menu/main-menu.component'

//import routing module
import { NavigationModuleRouting } from './navigation-routing.module';

import './navigation-registry.module';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    NavigationModuleRouting
  ],
  providers: [],
  exports: [
    MainMenuComponent
  ]
})



export class NavigationModule {}
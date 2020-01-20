import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { MainMenuComponent } from './components/main-menu/main-menu.component'

//import routing module
import { NavigationModuleRouting } from './navigation-routing.module';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';

import './navigation-registry.module';

import './navigation-registry.module';

@NgModule({
  declarations: [
    MainMenuComponent,
    MenuItemComponent,
    MenuWrapperComponent
  ],
  imports: [
    CommonModule,
    NavigationModuleRouting
  ],
  providers: [],
  exports: [
    MainMenuComponent
  ], 
  entryComponents: [
    MainMenuComponent
  ]
})



export class NavigationModule {}
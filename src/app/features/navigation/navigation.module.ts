import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components


//import routing module
import { NavigationModuleRouting } from './navigation.routing';



import './navigation.registry';
import { MainMenuComponent } from './components/containers/main-menu/main-menu.component';
import { MenuItemComponent } from './components/presentational/menu-item/menu-item.component';
import { MenuWrapperComponent } from './components/presentational/menu-wrapper/menu-wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FloatingMenuComponent } from './components/containers/floating-menu/floating-menu.component';

@NgModule({
  declarations: [
    MainMenuComponent,
    MenuItemComponent,
    MenuWrapperComponent,
    FloatingMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavigationModuleRouting
  ],
  providers: [],
  exports: [
    MainMenuComponent
  ], 
  entryComponents: [
    MainMenuComponent,
    FloatingMenuComponent
  ]
})



export class NavigationModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components


//import routing module
import { NavigationModuleRouting } from './navigation.routing';



import './navigation.registry';
import { MainMenuComponent } from './components/containers/main-menu/main-menu.component';
import { MenuItemComponent } from './components/presentational/menu-item/menu-item.component';
import { ListMenuComponent } from './components/presentational/list-menu/list-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FloatingMenuComponent } from './components/presentational/floating-menu/floating-menu.component';

@NgModule({
  declarations: [
    MainMenuComponent,
    MenuItemComponent,
    ListMenuComponent,
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
  ]
})



export class NavigationModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component';
import { RoutesModule } from './sidebar-routing.module';



@NgModule({
  declarations: [
    SidebarViewComponent
  ],
  imports: [
    CommonModule,
    RoutesModule
  ]
})
export class SidebarModule { }

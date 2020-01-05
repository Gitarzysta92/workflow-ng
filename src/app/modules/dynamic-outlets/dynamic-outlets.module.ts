import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component';
import { DynamicItemDirective } from './directives/dynamic-item.directive';



@NgModule({
  declarations: [
    SidebarViewComponent,
    DynamicItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicOutletsModule { }

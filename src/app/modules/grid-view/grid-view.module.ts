import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicItemDirective } from './directives/grid-view.directive';



@NgModule({
  declarations: [
    DynamicItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SidebarModule { }

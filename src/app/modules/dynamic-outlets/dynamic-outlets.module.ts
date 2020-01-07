import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component';
import { DynamicItemDirective } from './directives/dynamic-item.directive';
import { SwitchExpandComponent } from './components/switch-expand/switch-expand.component';

import './dynamic-outlets.registry';

@NgModule({
  declarations: [
    SidebarViewComponent,
    DynamicItemDirective,
    SwitchExpandComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    SwitchExpandComponent
  ]
})
export class DynamicOutletsModule { }

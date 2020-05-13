import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Directionality } from '@angular/cdk/bidi';


import { TilesBoardModule } from './components/tiles-board/tiles-board.module';
import { ContentTileModule } from './components/content-tile/content-tile.module';
import { InjectComponentDirective } from './directives/inject-component.directive'
import { InsertionSpotDirective } from './directives/insertion-spot.directive';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { Collapsible } from './directives/collapsible.directive';



@NgModule({
  declarations: [
    Collapsible,
    InjectComponentDirective,
    InsertionSpotDirective,
    SwitchButtonComponent
  ],
  imports: [
    TilesBoardModule,
    ContentTileModule,
    CommonModule,
    NgScrollbarModule,
    
  ],
  exports: [
    Collapsible,
    ContentTileModule,
    NgScrollbarModule,
    InjectComponentDirective,
    InsertionSpotDirective,
    SwitchButtonComponent
  ],
})
export class SharedModule { }

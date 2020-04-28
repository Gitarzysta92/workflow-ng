import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Directionality } from '@angular/cdk/bidi';


import { TilesBoardModule } from './components/tiles-board/tiles-board.module';
import { ContentTileModule } from './components/content-tile/content-tile.module';



@NgModule({
  declarations: [

  ],
  imports: [
    TilesBoardModule,
    ContentTileModule,
    CommonModule,
    NgScrollbarModule,
  ],
  exports: [
    ContentTileModule,
    NgScrollbarModule
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesBoardModule } from './components/tiles-board/tiles-board.module';
import { ContentTileModule } from './components/content-tile/content-tile.module';



@NgModule({
  declarations: [

  ],
  imports: [
    TilesBoardModule,
    ContentTileModule,
    CommonModule
  ],
  exports: [
    ContentTileModule
  ]
})
export class SharedModule { }

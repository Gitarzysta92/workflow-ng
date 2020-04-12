import { NgModule } from '@angular/core';
import { TileBodyComponent } from './tile-body/tile-body.component';
import { TileFooterComponent } from './tile-footer/tile-footer.component';
import { TileHeaderComponent } from './tile-header/tile-header.component';
import { TileComponent } from './tile/tile.component';
import { TilesBoardComponent } from './tiles-board/tiles-board.component';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TilesBoardComponent,
    TileComponent,
    TileBodyComponent,
    TileFooterComponent,
    TileHeaderComponent,
  ],
  exports: [
    TilesBoardComponent,
    TileComponent,
    TileBodyComponent,
    TileFooterComponent,
    TileHeaderComponent,
  ]
})
export class TilesBoardModule { }


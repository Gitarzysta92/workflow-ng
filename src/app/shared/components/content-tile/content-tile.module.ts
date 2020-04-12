import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile.component';
import { TileHeaderComponent } from './tile-header/tile-header.component';
import { TileBodyComponent } from './tile-body/tile-body.component';
import { TileFooterComponent } from './tile-footer/tile-footer.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TileComponent,
    TileHeaderComponent,
    TileBodyComponent,
    TileFooterComponent
  ],
  exports: [
    TileComponent,
    TileHeaderComponent,
    TileBodyComponent,
    TileFooterComponent
  ]
})
export class ContentTileModule { }


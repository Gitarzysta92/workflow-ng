import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DashboardTiles } from './dashboards-items';
import { DashboardTile } from '../models/DashboardTile';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _dashboardTiles: Array<DashboardTile>;

  constructor() {
    this._dashboardTiles = DashboardTiles.map(tileData => new DashboardTile(tileData));
  }
  
  public getTiles() {
    console.log(this._dashboardTiles)
    return this._dashboardTiles;
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DashboardTiles } from './dashboards-items';
import { DashboardTile } from '../models/dashboard-tile';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _dashboardTiles: Array<DashboardTile>;

  constructor() {
    this._dashboardTiles = DashboardTiles.map(tileData => new DashboardTile(tileData));
  }
  
  public getTiles() {
    return this._dashboardTiles;
  }
}

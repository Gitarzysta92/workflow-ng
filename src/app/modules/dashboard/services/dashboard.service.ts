import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dashboardItems } from './dashboards-items'
import { DashboardTile } from '../models/dashboard-tile';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { 
  }
  
  getItems(): Array<DashboardTile> {
    return dashboardItems.map(item => new DashboardTile(item));
  }

}
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardTile } from '../../models/dashboard-tile';



@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.scss']
})
export class DashboardMasterComponent implements OnInit {

  public tiles: Array<DashboardTile>

  constructor(
    private _dashboardService: DashboardService
  ) {

  }

  ngOnInit() {
    this.tiles = this._dashboardService.getItems();
  }

}

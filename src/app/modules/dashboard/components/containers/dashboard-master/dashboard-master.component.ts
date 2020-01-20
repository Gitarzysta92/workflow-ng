import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { DashboardTile } from '../../../models/DashboardTile';



@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.css']
})
export class DashboardMasterComponent implements OnInit {

  dashboardItems: Array<DashboardTile>;

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardItems = this.dashboardService.getTiles();
  }

}

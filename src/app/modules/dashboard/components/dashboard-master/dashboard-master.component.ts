import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';



@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.css']
})
export class DashboardMasterComponent implements OnInit {

  dashboardItems: Array<any>

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardItems = this.dashboardService.getItems();


  }

}

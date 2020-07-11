import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import { DashboardTile } from '../../../../models/dashboard-tile';



@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.scss']
})
export class DashboardMasterComponent implements OnInit {

  dashboardItems: Array<DashboardTile>;

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardItems = this.dashboardService.getTiles();
  }


  pinnedActivities = [
    {
      creationDate: new Date(),
      title: 'Curabitur non dui non',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a auctor ante. Ut vulputate tempus sapien',
      backgroundColor: '#f6f6f6'
    },
    {
      creationDate: new Date(),
      title: 'Curabitur non dui non',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a auctor ante. Ut vulputate tempus sapien',
      backgroundColor: '#f6f6f6'
    }
  ]

  activitiesData = [
    { 
      date: new Date(),
      data: this.pinnedActivities
    },
    { 
      date: new Date(),
      data: this.pinnedActivities
    }
  ]

}

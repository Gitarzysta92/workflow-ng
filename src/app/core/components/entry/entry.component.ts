import { Component, OnInit } from '@angular/core';

import { Workflow } from '../../services/workflow-shared-api.service';

import { GridConfig } from '../layout-grid/layout-grid.component';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  sidebarLeftConfig: GridConfig;
  sidebarRightConfig: GridConfig;
  mainConfig: GridConfig;

  constructor() {

  }

  ngOnInit() {
  }

}

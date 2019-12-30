import { Component, OnInit } from '@angular/core';


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
    // const AuthState = Workflow.isAuthorized({ listen: true });

    // AuthState.subscribe(result => {
    //   result ? this._setupViewForLoggedUser() : this._setupViewForNotLoggedUser()
    // })
  }

  ngOnInit() {
  }

  private _setupViewForLoggedUser() {

  }

}

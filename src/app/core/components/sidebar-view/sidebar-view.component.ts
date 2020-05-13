import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GridViews, TemplateGridService } from '@workflow/grid';


import { OutletItem } from '../../models/outlet-item';
import { OutletsRegistryService } from '../../services/outlets-registry/dynamic-components.service';

@Component({
  selector: 'sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.scss'] 
})
export class SidebarViewComponent implements OnInit {

  gridView: any;
  itemsForView: Array<OutletItem> = [];

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _templateGridService: TemplateGridService,
    private readonly _outletsRegistry: OutletsRegistryService
  ) { }


  ngOnInit() {
    this.gridView = this._setTargetOutlet();
    this.itemsForView = this._outletsRegistry.getItems(this._route.outlet);
   // console.log(this.itemsForView);
  
  }


  private _setTargetOutlet() {
    let appView;
    switch(this._route.outlet) {
      case 'app-view-topbar': {
        appView = this._templateGridService.view(GridViews.topBar);
        break;
      }
      case 'app-view-left-sidebar': {
        appView = this._templateGridService.view(GridViews.sidebarLeft);
        break;
      }
      case 'gridViews.primary': {
        appView = this._templateGridService.view(GridViews.primary);
        break;
      }
      case 'app-view-right-sidebar': {
        appView = this._templateGridService.view(GridViews.sidebarRight);
        break;
      }
      case 'app-view-footer': {
        appView = this._templateGridService.view(GridViews.footer);
        break;
      }
    }
    return appView;
  }
}




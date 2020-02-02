import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Registry, SharedRegistryService } from '@workflow/registry';
import { GridViews, TemplateGridService } from '@workflow/grid';

import { OutletItem } from '../../models/outlet-item';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.scss']
})
export class SidebarViewComponent implements OnInit {

  gridView: any;
  itemsForView: Array<OutletItem> = [];

  constructor(
    private readonly registryService: SharedRegistryService,
    private readonly route: ActivatedRoute,
    private templateGridService: TemplateGridService
  ) { }


  ngOnInit() {
    this.gridView = this._setTargetOutlet();
    this.itemsForView = this._getOutletsItems();
  }


  private _getOutletsItems(): Array<OutletItem> {
    const registryItems = this.registryService.getRecords<OutletItem>(Registry.DynamicOutlets);
    if (!Array.isArray(registryItems)) return [];

    const filteredItems = registryItems.filter(item => item.type === this.route.outlet);
    return this._sortItemsDescending(filteredItems);
  }


  private _sortItemsDescending(items: Array<OutletItem>): Array<OutletItem> {
    return items.sort((first, second) => first.position - second.position);
  }


  private _setTargetOutlet() {
    let appView;
    switch(this.route.outlet) {
      case 'app-view-topbar': {
        appView = this.templateGridService.view(GridViews.topBar);
        break;
      }
      case 'app-view-left-sidebar': {
        appView = this.templateGridService.view(GridViews.sidebarLeft);
        break;
      }
      case 'gridViews.primary': {
        appView = this.templateGridService.view(GridViews.primary);
        break;
      }
      case 'app-view-right-sidebar': {
        appView = this.templateGridService.view(GridViews.sidebarRight);
        break;
      }
      case 'app-view-footer': {
        appView = this.templateGridService.view(GridViews.footer);
        break;
      }
    }
    return appView;
  }
}




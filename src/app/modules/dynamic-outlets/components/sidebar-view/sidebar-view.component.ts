import { Component, OnInit } from '@angular/core';
import { Registry, SharedRegistryTemplate, RegistryList, SharedRegistryService } from '../../../../core/services/shared-registry/shared-registry.service';
import { ActivatedRoute } from '@angular/router';
import { TemplateGridService, GridViews, GridView } from '@workflow/grid';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.scss']
})
export class SidebarViewComponent implements OnInit {

  outletData: any;

  sidebarItems: any;

  gridView: any;

  itemsForView: Array<any> = [];

  constructor(
    private readonly registryService: SharedRegistryService,
    private readonly route: ActivatedRoute,
    private templateGridService: TemplateGridService
  ) { }


  ngOnInit() {
    this.gridView = this.setTargetOutlet();
    
    const { items } = this.registryService.getRegistry(RegistryList.Sidebar);
    this.sidebarItems = items.sort((first, second) => {
      return first.position - second.position;
    })
    
    this.sidebarItems.forEach(item => {
      item.type === this.route.outlet 
        && this.itemsForView.push(item.component);
    })
  }

  setTargetOutlet() {
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




@Registry(RegistryList.Sidebar)
class Sidebar extends SharedRegistryTemplate { 
  static dataScheme = {
    name: 'string',
    path: 'string',
    type: '',
    position: 'number'
  }
}

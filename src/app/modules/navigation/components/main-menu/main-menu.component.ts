import { Component, OnInit } from '@angular/core';
import { TemplateGridService, GridViews } from '@workflow/grid';
import { ActivatedRoute } from '@angular/router';
import { Registry, SharedRegistryTemplate, RegistryList, SharedRegistryService } from '../../../../core/services/shared-registry/shared-registry.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']

})

export class MainMenuComponent implements OnInit {
  menuItems: any = [];

  constructor(
    private readonly registryService: SharedRegistryService,
    private readonly gridService: TemplateGridService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menuItems 
    
    const navigationItems = this.registryService.getRegistryItems(RegistryList.Navigation);
    if (!navigationItems) return;

    const parentAbsPath = this.getPrimaryOutletAbsPath();
    this.menuItems = navigationItems.map(item => {
      item.path = [parentAbsPath, item.path];
      return item;
    })
    console.log(this.menuItems)
  }

  collapseSidebar() {
    const sidebarLeft = this.gridService.view(GridViews.sidebarLeft);
    sidebarLeft && sidebarLeft.collapse();
  }

  getPrimaryOutletAbsPath() {
    const routes = this.route.pathFromRoot;
    const fragments = [];

    Array.isArray(routes) && routes.forEach(route => {
      if (route.outlet != 'primary') return;
      route.snapshot.url.forEach(fragment => fragments.push(fragment.path));
    })

    const absPath = `/${fragments.join('/')}`;
    return absPath;
  }

}

@Registry(RegistryList.Navigation)
class Navigation extends SharedRegistryTemplate { 
  static dataScheme = {
    name: 'string',
    path: 'string',
    childrens: [],
    meta: {
      position: 'number'
    }
  }
}


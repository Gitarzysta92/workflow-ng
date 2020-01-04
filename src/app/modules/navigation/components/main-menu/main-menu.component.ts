import { Component, OnInit } from '@angular/core';
import { TemplateGridService, GridViews } from '@workflow/grid';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators'
import { Registry, SharedRegistryTemplate, RegistryList, SharedRegistryService } from '../../../../core/services/shared-registry/shared-registry.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']

})

export class MainMenuComponent implements OnInit {
  menuItems: any = [];

  constructor(
    private readonly registryService: SharedRegistryService,
    private readonly gridService: TemplateGridService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuItems = this.registryService.getRegistryItems(RegistryList.Navigation);

    const parentAbsPath = this.getPrimaryOutletAbsPath();

    this.menuItems = this.menuItems.map(item => Object.assign(item, { isToplevel: true }))

    this.menuItems = this.recursiveWalker(this.menuItems, 'childrens', item => {
      item.path = [parentAbsPath, ...item.path.split('/')]
      item.url = this.router.parseUrl(item.path.join('/'))
      return new MenuItem(item)
    });

    this.setActiveItems();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveItems();
      })
  }

  setActiveItems() {
    this.recursiveWalker(this.menuItems, 'childrens', item => {
      item.active = this.router.isActive(item.url, false);
      return item;
    });
  };


  recursiveWalker(items, key, callback) {
    if (!Array.isArray(items)) return;
    return items.map(item => {
      item.hasOwnProperty(key) && (item[key] = this.recursiveWalker(item[key], key, callback));
      return callback(item)
    });
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


class MenuItem {
  name: string;
  path: Array<string>;
  childrens: Array<MenuItem>;
  
  position: number;
  icon: string;
  active: boolean = false;
  url: any;
  isToplevel: boolean;

  constructor(itemData){
    this.name = itemData.name;
    this.path = itemData.path;
    this.childrens = itemData.childrens || [];

    this.position = itemData.meta.position;
    this.icon = itemData.meta.icon;
    this.url = itemData.url;
    this.isToplevel = itemData.isToplevel;
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


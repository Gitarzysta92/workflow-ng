import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators'

import { TemplateGridService, GridViews } from '@workflow/grid';
import { NavigationRegistryService } from './../../services/naviagtion-registry.service';
import { NavigationItem } from '../../models/navigation-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']

})

export class MainMenuComponent implements OnInit {

  menuItems: Array<NavigationItem> = [];

  constructor(
    private readonly navigationRegistry: NavigationRegistryService,
    private readonly gridService: TemplateGridService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuItems = this.navigationRegistry.getItems();
    console.log(this.menuItems);
    const parentAbsPath = this.getPrimaryOutletAbsPath();

    this.menuItems = this.menuItems.map(item => Object.assign(item, { isToplevel: true }))

    this.menuItems = this.recursiveWalker(this.menuItems, 'childrens', item => {
      item.path = [parentAbsPath, ...item.path.split('/')]
      item.url = this.router.parseUrl(item.path.join('/'))
      return new NavigationItem(item)
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




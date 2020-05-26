import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators'

import { TemplateGridService, GridViews } from '@workflow/grid';
import { NavigationItem } from 'src/app/features/navigation/models/navigation-item';
import { NavigationRegistryService } from 'src/app/features/navigation/services/naviagtion-registry.service';
import { ExpandableListItem } from 'src/app/shared/components/expandable-list/expandable-list.component';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']

})

export class MainMenuComponent implements OnInit {

  @Input() isCollapsed: boolean = false;
  
  menuItems: Array<ExpandableNavigationItem> = [];
  
  constructor(
    private readonly _navigationRegistry: NavigationRegistryService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    this.menuItems = this._navigationRegistry.getItems() as Array<ExpandableNavigationItem>;
    const parentAbsPath = this.getPrimaryOutletAbsPath();



    this.menuItems = this.menuItems.map(item => Object.assign(item, { isToplevel: true }))

    this.menuItems = this.recursiveWalker(this.menuItems, 'childrens', item => {
      item.path = [parentAbsPath, ...item.path.split('/')]
      item.url = this._router.parseUrl(item.path.join('/'))
      return new ExpandableNavigationItem(item)
    });
    

    console.log(this.menuItems);

    this.setActiveItems();
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveItems();
      })
  }

  setActiveItems() {
    this.recursiveWalker(this.menuItems, 'childrens', item => {
      item.active = this._router.isActive(item.url, false);
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
  }


  getPrimaryOutletAbsPath() {
    const routes = this._route.pathFromRoot;
    const fragments = [];

    Array.isArray(routes) && routes.forEach(route => {
      if (route.outlet != 'primary') return;
      route.snapshot.url.forEach(fragment => fragments.push(fragment.path));
    })

    const absPath = `/${fragments.join('/')}`;
    return absPath;
  }
}


export class ExpandableNavigationItem extends NavigationItem implements ExpandableListItem {
  public expanded: boolean = false;
  public settled: boolean = false;
  public childrens: Array<ExpandableNavigationItem> = [];

  private _active: boolean = false;
  get active(): boolean { return this._active; }
  set active(value: boolean) { 
    this._active = this.expanded = this.settled = value; 
  }

  constructor(data) {
    super(data);
    this.childrens = data.childrens;
  }
}




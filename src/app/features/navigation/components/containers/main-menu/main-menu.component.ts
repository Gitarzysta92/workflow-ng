import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators'

import { TemplateGridService, GridViews } from '@workflow/grid';
import { NavigationItem } from 'src/app/features/navigation/models/navigation-item';
import { NavigationRegistryService } from 'src/app/features/navigation/services/naviagtion-registry.service';
import { ExpandableListItem } from 'src/app/shared/components/expandable-list/expandable-list.component';
import { FloatingTrayComponent } from 'src/app/shared/components/floating-tray/floating-tray.component';
import { Observable } from 'rxjs';

interface SidebarItem {
  collapsed: Observable<boolean>;
}



@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainMenuComponent implements OnInit, SidebarItem, OnChanges {

  @Input() collapsed: Observable<boolean>;
  
  public menuItems: Array<ExpandableNavigationItem> = [];
  public isCollapsed: boolean = false;
  
  constructor(
    private readonly _navigationRegistry: NavigationRegistryService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _changeDetector: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    this.menuItems = this._navigationRegistry.getItems() as Array<ExpandableNavigationItem>;
    const parentAbsPath = this._getPrimaryOutletAbsPath();

    this._setTopLevelItems();
    this._setItemsUrlFormat(parentAbsPath);


    this.setActiveItems();
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveItems();
      });

    this.collapsed
      .subscribe(value => {
        this.setActiveItems();
        this.isCollapsed = value;
        this._changeDetector.markForCheck();
      });
  }

  public ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
  }

  public setActiveItems() {
    this._recursiveWalker(this.menuItems, 'childrens', item => {
      item.active = this._router.isActive(item.url, false);
      return item;
    });
    this._changeDetector.markForCheck();
  };


  private _setTopLevelItems(): void {
    this.menuItems = this.menuItems.map(item => Object.assign(item, { isToplevel: true }));
  }

  private _setItemsUrlFormat(parentAbsPath: string): void {
    this.menuItems = this._recursiveWalker(this.menuItems, 'childrens', item => {
      item.path = [parentAbsPath, ...item.path.split('/')];
      item.url = this._router.parseUrl(item.path.join('/'));
      return new ExpandableNavigationItem(item);
    });
  }

  
  private _recursiveWalker(items, key, callback) {
    if (!Array.isArray(items)) return;
    return items.map(item => {
      item.hasOwnProperty(key) && (item[key] = this._recursiveWalker(item[key], key, callback));
      return callback(item)
    });
  }

  private _getPrimaryOutletAbsPath() {
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




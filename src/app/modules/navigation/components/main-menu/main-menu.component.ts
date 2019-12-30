import { Component, OnInit } from '@angular/core';
import { SharedRegistry} from '../../../../core/services/shared-registry/shared-registry.decorator';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
  private _menuItems: Array<>;

  constructor() {
    this._menuItems = [];
  }

  ngOnInit() {
    this._getMenuItems();
  }

  private _getMenuItems(): void {
    this._menuItems = this.sharedRegistry.get(RegistryList.navigation).items;
  }

  private _setMenuItemsPositions(): void {

  }



}


const asd = {
    name: '',
    path: '',
    childrens: [],
    meta: {
      position: 0,

    }
  }

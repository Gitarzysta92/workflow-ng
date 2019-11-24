import { Component, OnInit } from '@angular/core';
import { SharedRegistry} from '../../../../core/services/shared-registry/shared-registry.decorator';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
  menuItems: any;

  constructor() {}

  ngOnInit() {
    this.menuItems = Navigation.table;
  }

}

interface NavigationItemMeta {
  position: number;
}

interface NavigationItem {
    name: string;
    path: string;
    childrens: Array<NavigationItem>;
    meta: NavigationItemMeta;
}

@SharedRegistry('main-navigation')
class Navigation { 
  // Registry configuration
  static accessible: boolean = true;

  // Registry core properties - required
  static table: Array<any> = [];
  static scheme: NavigationItem = {
    name: '',
    path: '',
    childrens: [],
    meta: {
      position: 0
    }
  }

  
}


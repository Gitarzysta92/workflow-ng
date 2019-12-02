import { Component, OnInit } from '@angular/core';
import { Registry, SharedRegistryTemplate, RegistryList } from '../../../../core/services/shared-registry/shared-registry.service';


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

@Registry(RegistryList.Navigation)
class Navigation extends SharedRegistryTemplate { 
  static scheme: {
    name: 'string',
    path: 'string',
    childrens: [],
    meta: {
      position: 'number'
    }
  }
}


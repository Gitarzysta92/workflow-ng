import { Component, OnInit } from '@angular/core';
import { Registry, SharedRegistryTemplate, RegistryList } from '../../../../core/services/shared-registry/shared-registry.service';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.scss']
})
export class SidebarViewComponent implements OnInit {

  sidebarItems: any;

  constructor() { }

  ngOnInit() {
    this.sidebarItems = Sidebar.table;
    console.log(this.sidebarItems);
  }

}




@Registry(RegistryList.Sidebar)
class Sidebar extends SharedRegistryTemplate { 
  static dataScheme = {
    name: 'string',
    path: 'string',
    meta: {
      position: 'number'
    }
  }
}

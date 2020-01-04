import { Component, OnInit } from '@angular/core';
import { TemplateGridService, GridViews } from '@workflow/grid';
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
    //private readonly sidebarRef: SidebarReference
  ) {}

  collapseSidebar() {
    const sidebarLeft = this.gridService.view(GridViews.sidebarLeft);
    sidebarLeft && sidebarLeft.collapse();
  }

  ngOnInit() {
    this.menuItems = this.registryService.getRegistry(RegistryList.Navigation).items;
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


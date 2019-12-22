import { Component, OnInit } from '@angular/core';
import { Registry, SharedRegistryTemplate, RegistryList, SharedRegistryService } from '../../../../core/services/shared-registry/shared-registry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.scss']
})
export class SidebarViewComponent implements OnInit {

  sidebarItems: any;

  itemsForView: Array<any> = [];

  constructor(
    private readonly registryService: SharedRegistryService,
    private readonly route: ActivatedRoute
  ) { }

  


  ngOnInit() {
    const { items } = this.registryService.getRegistry(RegistryList.Sidebar);
    this.sidebarItems = items;

    this.sidebarItems.forEach(item => {
      item.type === this.route.parent.outlet 
        && this.itemsForView.push(item.component);
    })

    //console.log(this.itemsForView);
  }

  // private _loadComponent(component: any): any {
    

  //   return componentFactory;
  // } 

}




@Registry(RegistryList.Sidebar)
class Sidebar extends SharedRegistryTemplate { 
  static dataScheme = {
    name: 'string',
    path: 'string',
    type: '',
    position: 'number'
  }
}

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';


// imports components
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component'


// declare routes
const routes: Array<Route> = [
  { path: '', component: DashboardMasterComponent }
]

export const RoutesModule = RouterModule.forChild(routes);

// declare navigation paths
SharedRegistryService.createRecord({
  key: 'main-navigation',
  data: {
    name: '',
    path: '',
    childrens: {},
    meta: {
      icon: '',
      position: ''
    }
  }
})




// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
//   providers: []
// })

// export class DashboardModuleRouting {}
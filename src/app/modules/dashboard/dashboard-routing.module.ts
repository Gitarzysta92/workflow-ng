import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';


// imports components
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component'


// declare routes
const routes = [
  { path: '', component: DashboardMasterComponent }
]



// declare navigation paths
SharedRegistryService.get('navigation').add({
  name: '',
  path: '',
  childrens: {},
  meta: {
    icon: '',
    position: ''
  }
})



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DashboardModuleRouting {}
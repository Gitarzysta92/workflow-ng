import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';


// imports components
import { SidebarViewComponent } from './components/sidebar-view/sidebar-view.component'


// declare routes
const routes: Routes = [
  { path: '', children: [
    { path: 'left', component: SidebarViewComponent, outlet: 'sidebar-left' },
    { path: 'right', component: SidebarViewComponent, outlet: 'sidebar-right' }
  ]}

]

export const RoutesModule = RouterModule.forChild(routes);


// declare navigation paths
// SharedRegistryService.createRecord({
//   key: 'main-navigation',
//   data: {
//     name: '',
//     path: '',
//     childrens: {},
//     meta: {
//       icon: '',
//       position: ''
//     }
//   }
// })




// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
//   providers: []
// })

// export class DashboardModuleRouting {}
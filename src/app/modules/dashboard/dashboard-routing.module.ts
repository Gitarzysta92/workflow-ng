import { Route, RouterModule } from '@angular/router';


// imports components
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component'


// declare routes
const routes: Array<Route> = [
  { path: '', component: DashboardMasterComponent }
]

export const RoutesModule = RouterModule.forChild(routes);

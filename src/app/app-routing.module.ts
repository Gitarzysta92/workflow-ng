import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Load core services
import { AuthGuard } from './core/services/auth-guard/auth-guard.service';

// Load core components
import { AppViewComponent } from './core/components/app-view/app-view.component';
import { UnauthViewComponent } from './core/components/unauth-view/unauth-view.component';
import { InitializationComponent } from './core/components/initialization/initialization.component';


// Load modules routes
import { ActivitesRoutes } from './features/activities/activities.routing';
import { ArticlesRoutes } from './features/articles/articles.routing';
import { ProfilesRoutes } from './features/profiles/profiles.routing';
import { DashboardRoutes } from './features/dashboard/dashboard.routing';
import { AuthenticationRoutes } from './features/authentication/authentication.routing';
import { DiscussionsRoutes } from './features/discussions/discussions.routing';



const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },
  { path: 'workflow', canActivate: [AuthGuard], component: AppViewComponent, children: [
    { path: '', component: InitializationComponent, pathMatch: 'full' },
    ...ActivitesRoutes,
    ...ArticlesRoutes,
    ...DashboardRoutes,
    ...ProfilesRoutes,
    ...DiscussionsRoutes
  ]},
  { path: 'user', component: UnauthViewComponent, children: [
    ...AuthenticationRoutes,
    // { path: 'app-ads', component: SidebarViewComponent, outlet: 'unauth-view-sidebar' }
  ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})


export class AppModuleRouting {}


// { path: 'left-sidebar', component: SidebarViewComponent, outlet: 'app-view-left-sidebar'},
// { path: 'right-sidebar', component: SidebarViewComponent, outlet: 'app-view-right-sidebar'},
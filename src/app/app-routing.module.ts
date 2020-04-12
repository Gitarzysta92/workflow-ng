import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Load core services
import { AuthGuard } from './core/services/auth-guard/auth-guard.service';

// Load core components
import { AppViewComponent } from './core/components/app-view/app-view.component';
import { UnauthViewComponent } from './core/components/unauth-view/unauth-view.component';
import { InitializationComponent } from './core/components/initialization/initialization.component';

// Load additional modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ArticlesModule } from './modules/articles/articles.module';

import { DynamicOutletsRoutes } from './modules/dynamic-outlets/dynamic-outlets.routes';
import { UserProfileRoutes } from './modules/user-profile/user-profile.routes';


import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppAdvertisementsModule } from './modules/app-advertisements/app-advertisements.module';
import { ActivitiesModule } from './modules/activities/activities.module';


const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },
  { path: 'workflow', canActivate: [AuthGuard], component: AppViewComponent, children: [
    { path: '', component: InitializationComponent, pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
    { path: 'articles', loadChildren: () => ArticlesModule },
    { path: 'activities', loadChildren: () => ActivitiesModule },
    ...UserProfileRoutes,
    ...DynamicOutletsRoutes
  ]},
  { path: 'user', component: UnauthViewComponent, children: [
    { path: '', loadChildren: () => AuthenticationModule },
    { path: 'app-ads', loadChildren: () => AppAdvertisementsModule, outlet: 'entry-view-sidebar' }
  ]}
]



@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})


export class AppModuleRouting {}
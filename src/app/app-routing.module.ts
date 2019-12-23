import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Load core services
import { AuthGuard } from './core/services/auth-guard/auth-guard.service';
import { InitializationComponent } from './core/components/initialization/initialization.component';

// Load additional modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';


const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },
  { path: 'workflow', canActivate: [AuthGuard], children: [
    { path: '', component: InitializationComponent, pathMatch: 'full' },
    { path: 'sidebar-left/:components', loadChildren: () => SidebarModule, outlet: 'sidebar-left'},
    { path: 'sidebar-right/:components', loadChildren: () => SidebarModule, outlet: 'sidebar-right'},
    { path: 'dashboard', loadChildren: () => DashboardModule },
    { path: 'articles', loadChildren: () => ArticlesModule }
  ]},
  // { path: 'login',  component:  },
  // { register: 'register', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})

export class AppModuleRouting {}
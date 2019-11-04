import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/services/auth-guard/auth-guard.service';

import { ArticlesModule } from './modules/articles/articles.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';


const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },
  { path: 'workflow', canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
    { path: 'sidebar-left', loadChildren: () => SidebarModule,  }
    //{ path: 'projects', loadChildren: () => ProjectsModule }
  ]},
  // { path: 'login',  component:  },
  // { register: 'register', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppModuleRouting {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Load core services
import { AuthGuard } from './core/services/auth-guard/auth-guard.service';
import { InitializationComponent } from './core/components/initialization/initialization.component';

// Load additional modules
import { ArticlesModule } from './modules/articles/articles.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';


const routes: Routes = [
  { path: '', redirectTo: 'workflow', pathMatch: 'full' },
  { path: 'workflow', canActivate: [AuthGuard], children: [
    { path: '', component: InitializationComponent, pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
    //{ path: 'sidebar-left', loadChildren: () => SidebarModule,  }
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
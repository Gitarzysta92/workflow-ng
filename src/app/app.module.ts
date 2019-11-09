import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import "bootstrap";

//
// import application core
//

// imports entry component
import { EntryComponent } from './core/components/entry/entry.component'

// import core services
import { UserService } from './core/services/user/user.service';
import { SharedRegistryService } from './core/services/shared-registry/shared-registry.service'


// imports modules
import { NavigationModule } from './modules/navigation/navigation.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// imports shared
import { GridColumn } from './shared/components/layout-grid/layout-grid.component';

// imports top level routing module
import { AppModuleRouting } from './app-routing.module';
import { InitializationComponent } from './core/components/initialization/initialization.component';

@NgModule({
  declarations: [
    GridColumn,
    EntryComponent,
    InitializationComponent,
  ],
  imports: [
    AppModuleRouting,
    BrowserModule,
    NavigationModule,
    ArticlesModule,
    DashboardModule
  ],
  providers: [
    UserService,
    SharedRegistryService
  ],
  bootstrap: [EntryComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import "bootstrap";

//
// import application core
//

// imports entry component
import { AppViewComponent } from './core/components/app-view/app-view.component';


// import core services
import { UserService } from './core/services/user/user.service';
import { SharedRegistryService } from './core/services/shared-registry/shared-registry.service';
import { TemplateGridService } from './core/services/template-grid/template-grid.service';

// import core directives
import { GridColumn } from './core/directives/grid-column/grid-column.directive';


// imports modules
import { NavigationModule } from './modules/navigation/navigation.module';

// imports shared



// imports top level routing module
import { AppModuleRouting } from './app-routing.module';
import { InitializationComponent } from './core/components/initialization/initialization.component';

@NgModule({
  declarations: [
    GridColumn,
    AppViewComponent,
    InitializationComponent,
  ],
  imports: [
    AppModuleRouting,
    BrowserModule,
    NavigationModule
  ],
  providers: [
    UserService,
    SharedRegistryService,
    TemplateGridService
  ],
  bootstrap: [AppViewComponent]
})
export class AppModule { }

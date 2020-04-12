import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import "bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
// import application core
//

// imports core components
import { EntryViewComponent } from './core/components/entry-view/entry-view.component';
import { AppViewComponent } from './core/components/app-view/app-view.component';
import { UnauthViewComponent } from './core/components/unauth-view/unauth-view.component';
import { InitializationComponent } from './core/components/initialization/initialization.component';

// import core services
import { UserService } from './core/services/user/user.service';
import { SharedRegistryService } from './core/services/shared-registry/shared-registry.service';
import { TemplateGridService } from './core/services/template-grid/template-grid.service';


// import core directives
import { GridColumn } from './core/directives/grid-column/grid-column.directive';

// imports modules
import { NavigationModule } from './modules/navigation/navigation.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { DynamicOutletsModule } from './modules/dynamic-outlets/dynamic-outlets.module';


// imports top level routing module
import { AppModuleRouting } from './app-routing.module';


@NgModule({
  declarations: [
    GridColumn,
    AppViewComponent,
    EntryViewComponent,
    UnauthViewComponent,
    InitializationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModuleRouting,
    NavigationModule,
    UserProfileModule,
    DynamicOutletsModule,
  ],
  providers: [
    UserService,
    SharedRegistryService,
    TemplateGridService
  ],
  bootstrap: [EntryViewComponent]
})
export class AppModule { }

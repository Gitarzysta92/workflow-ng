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


// imports modules
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './features/navigation/navigation.module';
import { ProfilesModule } from './features/profiles/profiles.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { DiscussionsModule } from './features/discussions/discussions.module';
import { ActivitiesModule } from './features/activities/activities.module';
// import { DashboardModule } from './modules/dashboard/dashboard.module';
// import { DynamicOutletsModule } from './modules/dynamic-outlets/dynamic-outlets.module';
// import { ArticlesModule } from './modules/articles/articles.module';
// import { AuthenticationModule } from './modules/authentication/authentication.module';
// import { AppAdvertisementsModule } from './modules/app-advertisements/app-advertisements.module';
// import { ActivitiesModule } from './modules/activities/activities.module';


// imports top level routing module
import { AppModuleRouting } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';









@NgModule({
  declarations: [
    AppViewComponent,
    EntryViewComponent,
    UnauthViewComponent,
    InitializationComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppModuleRouting,
    SharedModule,
    NavigationModule,
    ProfilesModule,
    DashboardModule,
    DiscussionsModule,
    ActivitiesModule,
    NgScrollbarModule
    // UserProfileModule,
    // DynamicOutletsModule,
  ],
  providers: [
    UserService,
    SharedRegistryService,
    TemplateGridService
  ],
  bootstrap: [EntryViewComponent]
})
export class AppModule { }

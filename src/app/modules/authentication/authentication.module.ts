import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { LoginFormComponent } from './components/login-form/login-form.component'

//import routing module
import { AuthenticationModuleRouting } from './authentication-routing.module';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModuleRouting
  ]
})



export class AuthenticationModule {}
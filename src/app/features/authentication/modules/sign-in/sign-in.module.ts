import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components
import { LoginFormComponent } from './components/login-form/login-form.component'

//import routing module
import { SignInModuleRouting } from './sign-in-routing.module';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SignInModuleRouting
  ]
})



export class SignInModule {}
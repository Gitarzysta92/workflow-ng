import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './modules/sign-in/components/login-form/login-form.component';

// imports components


// declare routes
const routes = [
  { path: 'login', component: LoginFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class AuthenticationModuleRouting {}
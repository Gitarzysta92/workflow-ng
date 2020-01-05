import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports components
import { LoginFormComponent } from './components/login-form/login-form.component';

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
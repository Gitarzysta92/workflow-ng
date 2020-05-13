// imports components
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// declare routes
const routes = [
  { path: '', component: LoginFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class SignInModuleRouting {}
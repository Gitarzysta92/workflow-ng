import { NgModule, ReflectiveInjector } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports components
import { AdvSliderComponent } from './components/adv-slider/adv-slider.component'; 


const routes: Routes = [
  { path: '', component: AdvSliderComponent },
]


export const RoutesModule = RouterModule.forChild(routes);



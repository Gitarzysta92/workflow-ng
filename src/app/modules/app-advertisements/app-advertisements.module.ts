import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// import components
import { AdvSliderComponent } from './components/adv-slider/adv-slider.component'; 

// import routing module
import { RoutesModule } from './app-advertisements-routing.module';


@NgModule({
  declarations: [
    AdvSliderComponent
  ],
  imports: [
    RoutesModule
  ],
  providers: []
})


export class AppAdvertisementsModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// import components
import { PinnedArticlesComponent } from './components/pinned-articles/pinned-articles.component'

// import routing module
import { ArticlesModuleRouting } from './articles-routing.module';


import './articles-registry.module';

@NgModule({
  declarations: [
    PinnedArticlesComponent
  ],
  imports: [
    ArticlesModuleRouting
  ],
  providers: []
})



export class ArticlesModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesBrowseComponent } from './articles-browse/articles-browse.component';
import { ArticlesBrowseRoutingModule } from './articles-browse-routing.module';



@NgModule({
  declarations: [
    ArticlesBrowseComponent,
    ArticlesBrowseRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class ArticlesBrowseModule { }

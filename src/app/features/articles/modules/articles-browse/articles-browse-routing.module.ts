import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// imports components
import { ArticlesBrowseComponent } from './articles-browse/articles-browse.component';


// declare routes
const routes: Routes = [
  { path: '', component: ArticlesBrowseComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesBrowseRoutingModule { }

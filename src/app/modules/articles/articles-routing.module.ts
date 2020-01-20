import { NgModule, ReflectiveInjector } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedRegistryService } from '../../core/services/shared-registry/shared-registry.service';

// imports components
import { PinnedArticlesComponent } from './components/pinned-articles/pinned-articles.component'; 


const routes = [
  { path: '', component: PinnedArticlesComponent },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class ArticlesModuleRouting {}
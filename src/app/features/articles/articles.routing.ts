export const paths = {
  root: 'activities',
  browse: 'browse',

}

// declare routes
export const ArticlesRoutes = [  
  { path: paths.root, children: [
    { path: '', redirectTo: paths.browse, pathMatch: 'full' },
    { path: paths.browse, loadChildren: () => import('./modules/articles-browse/articles-browse.module').then(m => m.ArticlesBrowseModule) }
  ]},
];

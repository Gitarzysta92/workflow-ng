
// declare routes
export const DiscussionsRoutes = [
  { path: 'discussions', children: [
    { path: '', redirectTo: 'browse', pathMatch: 'full' },
    { path: 'browse', loadChildren: () => import('./views/discussions-browse/discussions-browse.module').then(m => m.DiscussionsBrowseModule) },
    { path: ':id', loadChildren: () => import('./views/discussion/discussion.module').then(m => m.DiscussionModule) }
  ]},
];
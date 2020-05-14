
// declare routes
export const DiscussionsRoutes = [
  { path: 'discussions', children: [
    { path: '', redirectTo: 'browse', pathMatch: 'full' },
    { path: 'browse', loadChildren: () => import('./modules/discussions-browse/discussions-browse.module').then(m => m.DiscussionsBrowseModule) },
    { path: ':id', loadChildren: () => import('./modules/discussion/discussion.module').then(m => m.DiscussionModule) }
  ]},
];
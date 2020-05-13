
// declare routes
export const ActivitesRoutes = [
  { path: 'activities', loadChildren: () => import('./modules/details/activities.module').then(m => m.ActivitiesModule) }
];

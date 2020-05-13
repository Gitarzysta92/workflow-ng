
// declare routes
export const DashboardRoutes = [  
  { path: 'dashboard', children: [
    { path: '', pathMatch: 'full', loadChildren: () => import('./modules/master/dashboard.module').then(m => m.DashboardModule) },
  ]},
];


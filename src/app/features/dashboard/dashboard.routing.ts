
// declare routes
export const DashboardRoutes = [  
  { path: 'dashboard', children: [
    { path: '', pathMatch: 'full', loadChildren: () => import('./views/master/dashboard-master.module').then(m => m.DashboardModule) },
  ]},
];


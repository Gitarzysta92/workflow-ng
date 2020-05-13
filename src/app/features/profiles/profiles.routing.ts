
// declare routes
export const ProfilesRoutes = [  
  { path: 'profiles', loadChildren: () => import('./modules/profile-details/profile-details.module').then(m => m.UserProfileModule)},
  { path: 'profile', loadChildren: () => import('./modules/profile-details/profile-details.module').then(m => m.UserProfileModule) }
];

// declare routes
export const AuthenticationRoutes = [  
    { path: 'login', loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule) },
];
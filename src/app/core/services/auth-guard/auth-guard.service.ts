import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../../services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly userService: UserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.userService.getSyncUserData();
    return user ? user : this.redirectToLoginPage();
  }

  redirectToLoginPage() {
    this.router.navigate(['user', { outlets: { 'primary': ['login'], 'entry-view-sidebar': ['app-ads'] }}]);
    return false;
  }
}

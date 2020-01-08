import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  isUserAuthorized: boolean = false;


  constructor() { 
    this.isUserAuthorized = User.authorized;
  }
  

  public setAsyncUserData(state: boolean) {
    this._storeUserStatus(state);

    this.isUserAuthorized = state;
  }

  public getAsyncUserData() {
    this._setStoredUserStatus();

    return of(this.isUserAuthorized);
  }

  public getSyncUserData() {

    this._setStoredUserStatus()
    return this.isUserAuthorized;
  }


  // local storage

  private _setStoredUserStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    user && (this.isUserAuthorized = user.isAuthorized)
  }

  private _storeUserStatus(state) {
    if (state === true) {
      localStorage.setItem('user', JSON.stringify({ isAuthorized: state }));
    } else {
      localStorage.clear();
    }
  }
}


class User {
  private static _authorized: boolean = false;
  public static get authorized() {
    return this._authorized;
  }

  public static set authorized(state) {
    this._authorized = state;
  }

}


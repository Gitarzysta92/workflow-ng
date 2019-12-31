import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserAuthorized: boolean = false;

  constructor() { }

  public setAsyncUserData(state: boolean) {
    this.isUserAuthorized = !!state;
  }

  public getAsyncUserData() {
    return of(this.isUserAuthorized);
  }
}

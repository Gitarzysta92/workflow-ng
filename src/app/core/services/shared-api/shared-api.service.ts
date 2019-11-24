import { Injectable } from '@angular/core';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getSyncUserData() {
      return true;
  }

  public getAsyncUserData() {
    return of(true);
  }

}


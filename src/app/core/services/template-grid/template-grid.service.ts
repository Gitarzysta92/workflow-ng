import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GridPart as GridPartEnum } from './grid-part';

@Injectable({ providedIn: 'root' })
export class TemplateGridService {

  constructor() { }
}

export const GridPart = GridPartEnum;




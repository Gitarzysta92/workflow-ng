import { Injectable } from '@angular/core';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GridPart as GridViewsEnum } from './grid-part';
import { ObjectUnsubscribedError, Subject } from 'rxjs';


const _views: Array<GridView> = [];



@Injectable({ providedIn: 'root' })
export class TemplateGridService {

  public _views: Array<GridView>;

  constructor() { 
    this._views = _views;
  }

  public addView(id: GridViewsEnum, api: any) {
    if (!GridViewsEnum[id]) return;
    this._views.push(new GridView(id, api))
  }

  public view(id: GridViewsEnum) {
    return this._getGridView(id);
  }

  public initializeViews(list): void {
    //Object.keys(list).forEach(id => this._views.push(new GridView(id)));
  }

  private _getGridView(id: number): GridView {
    return this._views.find(gridView => gridView.id === id);

  }
}



export class GridView {
  id: GridViewsEnum;

  public expandState: Subject<boolean>;

  private _collapse: Function;
  private _expand: Function;

  constructor(id, apiMethods) {
    this.id = id;
    this._collapse = apiMethods['collapse'];
    this._expand = apiMethods['expand'];
    this.expandState = new Subject();
  }


  collapse() {
    this._collapse();
    this.expandState.next(false);
  } 

  expand() {
    this._expand();
    this.expandState.next(true);
  } 

  // private _initializeApi(methods) {
  //   Object.keys(methods).forEach(prop => {
  //     Object.defineProperty(this, prop, {
  //       value: methods[prop],
  //       enumerable: true
  //     });
  //   });
  // }

}

export const GridViews = GridViewsEnum;




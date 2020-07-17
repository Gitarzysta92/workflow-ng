import { Injectable } from '@angular/core';
import { Registry, Archive } from '@workflow/registry';
import { DynamicComponent } from '../../models/dynamic-component';
import { isNullOrUndefined } from 'util';

export type InsertionQuery = Partial<DynamicComponentRecord>;


export interface DynamicComponentRecord {
  name: string,
  inputs: Array<string>,
  component: Function
}

@Injectable({ providedIn: 'root' })
@Registry(Archive.DynamicComponents)
export class DynamicComponentsRegistryService {

  public static archive: Array<DynamicComponent> = [];
  public static recordModel = DynamicComponent;


  private get _archive() { return DynamicComponentsRegistryService.archive; }

  constructor() {}

  public getItem(insertionSpot: TypeOfInsertionPoint): DynamicComponent {
    return this._archive.find(item => item.target === insertionSpot);
  }

  public getItems(query: InsertionQuery | TypeOfInsertionPoint): Array<DynamicComponent> {
    let filteredItems = [];
    
    if (typeof query === 'object') {
      filteredItems = this._archive.filter(item => {
        const keys = Object.keys(query);
        let isMatches = false;

        keys.forEach(key => {
          if (isNullOrUndefined(item[key])) return;
          const queryPropValue = query[key];
          const itemPropValue = item[key]; 

          if (Array.isArray(itemPropValue))
            isMatches = this._compareArrays(queryPropValue, itemPropValue);

          if (typeof itemPropValue === 'string')
            isMatches = (queryPropValue === itemPropValue);
          
        });

        return isMatches;
      });
      
    } else {
      const insertionSpot = query;
      filteredItems = this._archive.filter(item => item.target === insertionSpot);
    }

    return this._sortItemsDescending(filteredItems);
  }

  private _sortItemsDescending(items: Array<DynamicComponent>): Array<DynamicComponent> {
    return items.sort((first, second) => first.position - second.position);
  }

  private _compareArrays(firstArr: Array<any>, secondArr: Array<any>): boolean {
    if (!Array.isArray(firstArr) || !Array.isArray(secondArr)) return;
    const notMatched = firstArr.filter(firstItem => !secondArr.find(secondItem => firstItem === secondItem));
    return notMatched.length === 0;
  }

}



export enum TypeOfInsertionPoint {
  sidebarRight,
  sidebarLeft,
  dashboardTile
}


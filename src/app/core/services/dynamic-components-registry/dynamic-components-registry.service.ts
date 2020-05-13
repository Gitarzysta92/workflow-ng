import { Injectable } from '@angular/core';
import { Registry, Archive } from '@workflow/registry';
import { DynamicComponent } from '../../models/dynamic-component';
import { TypeOfInsertionPoint } from 'src/app/app';


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

  public getItems(insertionSpot: TypeOfInsertionPoint): Array<DynamicComponent> {
    const filteredItems = this._archive.filter(item => item.target === insertionSpot);
    return this._sortItemsDescending(filteredItems);
  }

  private _sortItemsDescending(items: Array<DynamicComponent>): Array<DynamicComponent> {
    return items.sort((first, second) => first.position - second.position);
  }

}
import { Injectable } from '@angular/core';
import { Registry, Archive } from '@workflow/registry';
import { OutletItem } from '../../models/outlet-item';

@Injectable({ providedIn: 'root' })
@Registry(Archive.DynamicComponents)
export class OutletsRegistryService {

  public static archive: Array<OutletItem> = [];
  public static recordModel = OutletItem;

  private get _archive() { return OutletsRegistryService.archive; }

  constructor() {}

  public getItems(outletName: string = ''): Array<OutletItem> {
    return this._getItems(outletName);
  }

  private _getItems(outletName: string): Array<OutletItem> {
    const filteredItems = this._archive.filter(item => item.type === outletName);
    return this._sortItemsDescending(filteredItems);
  }

  private _sortItemsDescending(items: Array<OutletItem>): Array<OutletItem> {
    return items.sort((first, second) => first.position - second.position);
  }
}
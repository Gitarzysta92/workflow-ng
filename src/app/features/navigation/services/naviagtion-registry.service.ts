import { Injectable } from '@angular/core';
import { Registry, Archive } from '@workflow/registry';
import { NavigationItem } from './../models/navigation-item';

@Injectable({ providedIn: 'root' })
@Registry(Archive.Navigation)
export class NavigationRegistryService {

  public static archive: Array<NavigationItem> = [];
  public static recordModel = NavigationItem;

  private get _archive() { return NavigationRegistryService.archive; }

  constructor() { }

  public getItems(): Array<NavigationItem> {
    return this._archive
  }
}

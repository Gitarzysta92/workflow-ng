import { SharedRegistry as _SharedRegistry } from './shared-registry';
import { SharedRegistryTemplate as _SharedRegistryTemplate } from './shared-registry.template'
import { Registry as _Registry } from './shared-registry.decorator';
import { RegistryList as _RegistryList } from './shared-registry.enum';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedRegistryService {


  constructor() {}

  public getRegistry(registryName) {
    return _SharedRegistry.getRegistry(registryName);
  }

  public getRegistryItems(registryName) {
    const registry = _SharedRegistry.getRegistry(registryName);
    return registry.items.map(item => this._createRecordDataCopy(item));
  }

  private _createRecordDataCopy(record) {
    return Object.assign({}, record);
  }
  

}


export const SharedRegistry = _SharedRegistry;
export const SharedRegistryTemplate = _SharedRegistryTemplate;
export const Registry = _Registry;
export const RegistryList = _RegistryList;


import { SharedRegistry as _SharedRegistry } from './shared-registry';
import { TypeOfRegistry } from './type-of-registry.enum';



import { Injectable, Type } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedRegistryService {


  constructor() {}

  public getRegistry(registryName) {
    return _SharedRegistry.getRegistry(registryName);
  }

  public getRegistryItems<RecordModel>(registryName): Array<RecordModel> {
    const registry = _SharedRegistry.getRegistry(registryName);
    return registry.items.map(item => this._createRecordDataCopy(item));
  }

  public getRecords<RecordModel>(registryName): Array<RecordModel> {
    return this.getRegistryItems<RecordModel>(registryName);
  }

  private _createRecordDataCopy(record) {
    return Object.assign({}, record);
  }
  
}


export { Registry } from './registry-init.decorator';
export const SharedRegistry = _SharedRegistry;
export const Archive = TypeOfRegistry;



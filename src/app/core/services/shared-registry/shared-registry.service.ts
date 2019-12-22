import { SharedRegistry as _SharedRegistry } from './shared-registry';
import { SharedRegistryTemplate as _SharedRegistryTemplate } from './shared-registry.template'
import { Registry as _Registry } from './shared-registry.decorator';
import { RegistryList as _RegistryList } from './shared-registry.enum';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedRegistryService {


  constructor() {}

  public getRegistry(registryName) {
    return SharedRegistry.getRegistry(registryName);
  }

}


export const SharedRegistry = _SharedRegistry;
export const SharedRegistryTemplate = _SharedRegistryTemplate;
export const Registry = _Registry;
export const RegistryList = _RegistryList;


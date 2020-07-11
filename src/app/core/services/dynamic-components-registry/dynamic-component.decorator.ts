import { SharedRegistry } from '../shared-registry/shared-registry';
import { Archive } from '@workflow/registry';
import { DynamicComponentRecord } from './dynamic-components-registry.service';

export function DynamicComponent(name?: string) {
  return function(component: Function) {
    const inputs = component.prototype.constructor['__prop__metadata__']; 
    //console.log(Object.keys(inputs), component);

    SharedRegistry.addRecordFor<DynamicComponentRecord>(Archive.DynamicComponents, {
      name: name,
      inputs: Object.keys(inputs),
      component: component,
    });
  }
}
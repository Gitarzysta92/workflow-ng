import { SharedRegistry } from './shared-registry';


export function Registry(name) {
  return function(target: any) {
    SharedRegistry.createRegistry(name, target);
  }
}
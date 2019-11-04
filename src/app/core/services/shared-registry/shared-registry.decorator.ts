import { SharedRegistryService } from './shared-registry.service';


export function SharedRegistry(name) {
  return function(target: any) {
    SharedRegistryService.addRegistry(name, target);
  }
}
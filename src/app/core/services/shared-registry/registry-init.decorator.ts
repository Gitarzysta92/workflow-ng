import { SharedRegistry } from './shared-registry';


export function Initialize<Model>(name) {
  return function<Model>(target: Model) {
    SharedRegistry.createRegistry<Model>(name, target);
  }
}``
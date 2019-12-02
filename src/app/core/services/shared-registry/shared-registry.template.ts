import { RegistryList } from './shared-registry.enum';
 
 export class SharedRegistryTemplate {
  static table: Array<any> = [];

  // configuration
  static registryName: RegistryList;
  static accessible: boolean = true;
  

  // Registry data scheme
  public static set scheme(data) { this._scheme = Object.assign(this._scheme, data) }
  private static _scheme: {
    name: 'string',
    component: 'Function'
  }
 }
import { RegistryList } from './shared-registry.enum';
 
 export class SharedRegistryTemplate {
  static table: Array<any> = [];

  // configuration
  static registryName: RegistryList;
  static accessible: boolean = true;
  

  // Registry data scheme
  public static dataScheme: any = {};
  private static _defaultDataScheme: any = {
    name: 'string',
    component: 'Function'
  }
  public static get scheme() { 
    return {...this.dataScheme, ...this._defaultDataScheme};
  }
 }
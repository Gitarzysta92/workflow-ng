import { SharedRegistryTemplate } from './shared-registry.template';
import { SharedRegistryContainer, RegistryRecord } from './shared-registry.container';
import { RegistryList } from './shared-registry.enum';



export class SharedRegistry {

  // Define array for no assigned registry records
  private static _notAssignedRecords: Array<any> = [];

  // Define array for RegistryContainers
  private static _archive: Array<SharedRegistryContainer> = [];
  public static get archive(): Array<SharedRegistryContainer> { return this._archive };
  
  //
  // Public methods (API)
  //

  // Create new registry 
  public static createRegistry(name: RegistryList, setup: SharedRegistryTemplate): void {
    if (name == null || setup == null) return;
    this._createRegistry({name, setup})
  }

  // Add new record to created registry
  public static addRecordFor(registryName: RegistryList, data: any = {}): void {
    if (registryName == null || data == null) return;
    this._addRecordFor(registryName , data);
  }


  //
  // Private methods
  //

  // Create new registry if doesn't exists already
  private static _createRegistry(config: any): SharedRegistryContainer {
    const { name, setup } = config;
    const isExists = this._archive.find(registry => registry.name === name);
    if (isExists) return isExists;
    
    setup.registryName = name;
    console.log(setup.registryName);
    const createdRegistry = new SharedRegistryContainer(setup);
    
    createdRegistry.addRecords(this._getNotAssignedRecordsByRegistryName(createdRegistry.name));
    this._archive.push(createdRegistry); 

    return createdRegistry;
  }

  // Add new record and assign it to registry if it does exists 
  private static _addRecordFor(registryName: RegistryList, data: any = {}): void {
    const newRecord = new RegistryRecord(registryName, data)

    const registry = this._archive.find(registry => console.log(registry.name, registryName));

    console.log(this._archive, RegistryList[registryName]); 

    registry ? registry.addRecord(newRecord) : this._notAssignedRecords.push(newRecord);
  }

  // Get all not Assigned Records
  private static _getNotAssignedRecordsByRegistryName(registryName: RegistryList): Array<RegistryRecord> {
    const filteredRecords = this._notAssignedRecords.reduce((acc, record, index) => 
      record.assignedRegistryName === registryName ? [...this._notAssignedRecords.splice(index, 1), ...acc] : acc, []);

   
    return filteredRecords;
  }




  // private static _validateConfig(configClass: object): boolean {
  //   const requiredProps = this._setup.configClassRequiredProps;
  //   const result = requiredProps.filter(key => configClass.hasOwnProperty(key));
  //   return result.length > 0 ? false : true;
  // }
}
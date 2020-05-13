import { SharedRegistryContainer, RegistryRecord } from './shared-registry.container';
import { TypeOfRegistry } from '../../../app';



export class SharedRegistry {

  // Define array for no assigned registry records
  private static _notAssignedRecords: Array<any> = [];

  // Define array for RegistryContainers
  private static _registry: Array<SharedRegistryContainer> = [];
  public static get registry() { return this._registry };
  
  //
  // Public methods (API)
  //

  // Create new registry 
  public static createArchive(name: TypeOfRegistry, archive): void {
    if (name == null || archive == null) return;
    this._createArchive(name, archive)
  }

  // Add new record to created registry 
  public static addRecordFor(registryName: TypeOfRegistry , data: any = {}): void {
    if (registryName == null || data == null) return;
    this._addRecordFor(registryName , data);
  }

  // Returns registry with given name
  public static getRegistry(registryName: TypeOfRegistry ): SharedRegistryContainer{
    return this._registry.find(registry => registry.name === registryName);
  }


  //
  // Private methods
  //

  // Create new registry if doesn't exists already
  private static _createArchive(name: TypeOfRegistry, archive): void {
    const isExists = this._registry.find(registry => registry.name === name);
    if (isExists) return;

    const createdRegistry = new SharedRegistryContainer(name, archive.recordModel);

    createdRegistry.addRecords(this._getNotAssignedRecordsByRegistryName(createdRegistry.name));
    archive.archive = createdRegistry.items;

    //console.log(archive)
    this._registry.push(createdRegistry); 
  }


  // Add new record and assign it to registry if it does exists 
  private static _addRecordFor(registryName: TypeOfRegistry , data: any = {}): void {
    const newRecord = new RegistryRecord(registryName, data)
    
    const registry = this._registry.find(registry => registry.name === registryName);
    registry ? registry.addRecord(newRecord) : this._notAssignedRecords.push(newRecord);
  }


  // Get all not Assigned Records
  private static _getNotAssignedRecordsByRegistryName(registryName: TypeOfRegistry ): Array<RegistryRecord> {
    const filteredRecords = [];

    this._notAssignedRecords = this._notAssignedRecords.filter(item => {
      const result = (item.assignedRegistryName === registryName) && filteredRecords.push(item)
      return !result;
    });
   
    return filteredRecords;
  }

}
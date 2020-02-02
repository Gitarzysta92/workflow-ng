import { SharedRegistryContainer, RegistryRecord } from './shared-registry.container';
import { TypeOfRegistry } from './type-of-registry.enum';
import { AdvSliderComponent } from 'src/app/modules/app-advertisements/components/adv-slider/adv-slider.component';



export class SharedRegistry {

  // Define array for no assigned registry records
  private static _notAssignedRecords: Array<any> = [];

  // Define array for RegistryContainers
  private static _archive: Array<SharedRegistryContainer<any>> = [];
  public static get archive() { return this._archive };
  
  //
  // Public methods (API)
  //

  // Create new registry 
  public static createRegistry<RecordModel>(name: TypeOfRegistry, recordModel: RecordModel): void {
    if (name == null || recordModel == null) return;
    this._createRegistry<RecordModel>({name, recordModel})
  }

  // Add new record to created registry 
  public static addRecordFor(registryName: TypeOfRegistry , data: any = {}): void {
    if (registryName == null || data == null) return;
    this._addRecordFor(registryName , data);
  }

  // Returns registry with given name
  public static getRegistry(registryName: TypeOfRegistry ): SharedRegistryContainer<any> {
    return this._archive.find(registry => registry.name === registryName);
  }


  //
  // Private methods
  //

  // Create new registry if doesn't exists already
  private static _createRegistry<RecordModel>(config): SharedRegistryContainer<RecordModel> {
    const { name, recordModel } = config;
    const isExists = this._archive.find(registry => registry.name === name);
    if (isExists) return isExists;
    
    const createdRegistry = new SharedRegistryContainer<RecordModel>(name, recordModel);

    createdRegistry.addRecords(this._getNotAssignedRecordsByRegistryName(createdRegistry.name));
    this._archive.push(createdRegistry); 

    return createdRegistry;
  }


  // Add new record and assign it to registry if it does exists 
  private static _addRecordFor(registryName: TypeOfRegistry , data: any = {}): void {
    const newRecord = new RegistryRecord(registryName, data)
    
    const registry = this._archive.find(registry => registry.name === registryName);
    registry ? registry.addRecord(newRecord) : this._notAssignedRecords.push(newRecord);
  }


  // Get all not Assigned Records
  private static _getNotAssignedRecordsByRegistryName(registryName: TypeOfRegistry ): Array<RegistryRecord> {
    const filteredRecords = [];

    this._notAssignedRecords = this._notAssignedRecords.filter(item => {
      const result = item.assignedRegistryName === registryName && filteredRecords.push(item)
      return !result;
    });
   
    return filteredRecords;
  }

}
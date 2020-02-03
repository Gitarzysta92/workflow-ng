import { TypeOfRegistry } from './type-of-registry.enum';


export class SharedRegistryContainer {

  private _table: Array<any> = [];
  public get items() { return this._table; }

  public readonly name: TypeOfRegistry;
  private _recordModel;

  constructor(name, recordModel) {
    if (!this._isRecordModelValid) return;

    this.name = name;
    this._recordModel = recordModel;

  }

  // Add sequentially registry records
  public addRecords(recordsList: Array<RegistryRecord>): void {
    if (!Array.isArray(recordsList)) return;
    recordsList.forEach(record => this.addRecord(record));
  }

  // Add single registry record
  public addRecord(recordData): void {
    if (recordData == null) return;
    const newRecord = new this._recordModel(recordData);
    this._table.push(newRecord);
  }

  // Check provided record model is valid
  // if not throw error
  private _isRecordModelValid(model: any): Error | boolean {
    if (typeof model === 'function') return true;  
    throw new Error('Given record model is invalid');
  }

}


 export class RegistryRecord {
  assignedRegistryName: TypeOfRegistry;
  constructor(assignedRegistryName, data) {
    this.assignedRegistryName = assignedRegistryName;
    this.initializeProperties(data);
  }

  initializeProperties(data): void {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        value: data[key],
        enumerable: true
      })
    })
  }
 }
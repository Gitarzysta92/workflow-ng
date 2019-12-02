import { RegistryList } from './shared-registry.enum';


export class SharedRegistryContainer {
  public readonly name: RegistryList;
  private _table: any;
  private _scheme: object;
  private _accessible: boolean;
  constructor(template) {
    this.name = template.registryName;
    this._table = template.table;
    this._scheme = template.scheme;
    this._accessible = template.accessible;

    


    this._selfSetup()
  }

  public addRecords(recordsList: Array<RegistryRecord>): void {
    if (!Array.isArray(recordsList)) return;
    recordsList.forEach(record => this.addRecord(record));
  }

  public addRecord(itemData): void {
    if (itemData == null) return;
    this._table.push(Object.assign(this._scheme, itemData));
  }

  private _selfSetup(): void {
    this._accessible && this._defineGetter();
  }

  private _defineGetter(): void {
    Object.defineProperty(this, 'get', {
      value: this._get,
      enumerable: true
    })
  }

  private _get() {
    return this._table;
  }
 }


 export class RegistryRecord {
  assignedRegistryName: RegistryList;
  constructor(assignedRegistryName, data) {
    this.assignedRegistryName = assignedRegistryName;
  }
 }
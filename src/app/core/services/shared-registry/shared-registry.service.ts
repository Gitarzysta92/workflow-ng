interface RegistryRecord {
  key?: string;
  data?: Object;
}


interface ConfigClass {
  table: Array<any>;
  scheme: Object;
  accessible?: boolean;
}

export class SharedRegistryService {
  private static _setup = {
    configClassRequiredProps: ['table', 'scheme'],
    defaultAccessible: false
  }

  private static _archive: Array<Registry> = [];
  public static get archive(): Array<Registry> { return this._archive };

  public static addRegistry(name, config): void {
    if (name == null || config == null) return;
    const createdRegistry = this._createRegistry(name, config)
    this._archive.push(createdRegistry);
  }

  public static createRecord(query: RegistryRecord = {}): Registry {
    const { key, data } = query;
    if (key == null || data == null) return;

    const targetRegistry = this._archive.find(reg => reg.name === key);
    targetRegistry && targetRegistry.add(data);

    return targetRegistry;
  }

  private static _createRegistry(name: string, configClass: ConfigClass): Registry {
    const isConfigInvalid = this._validateConfig(configClass);

    if (isConfigInvalid) return;
    const { table, scheme, accessible = this._setup.defaultAccessible } = configClass;
    const data = { name, table }
    const meta = { scheme, accessible}

    return new Registry(data, meta);
  }

  private static _validateConfig(configClass: object): boolean {
    const requiredProps = this._setup.configClassRequiredProps;
    const result = requiredProps.filter(key => configClass.hasOwnProperty(key));
    return result.length > 0 ? false : true;
  }
}

class Registry {
  public readonly name: string;
  private _table: any;
  private _scheme: object;
  private _accessible: boolean;

  constructor(data, meta) {
    this.name = data.name;
    this._table = data.table;
    this._scheme = meta.scheme;
    this._accessible = meta.accessible;

    this._selfSetup()
  }

  public add(itemData): void {
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
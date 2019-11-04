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

  public static get(name: string): Registry {
    return this._archive.find(reg => reg.name === name);
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







// import { Injectable } from '@angular/core';

// const archive: Array<Registry> = [];

// @Injectable({
//   providedIn: 'root'
// })

// export class SharedRegistryService {

//   constructor() {}


//   public add(name, registryArray): void {
//     archive.push(new Registry(name, registryArray))
//   }

//   public get(name: string): Registry {
//     console.log(name, archive)
//     return archive.find(reg => reg.name === name);
//   }
// }


// class Registry {
//   public readonly name: string;
//   public container: any
//   constructor(name, container) {
//     this.name = name;
//     this.container = container;
//   }
// }


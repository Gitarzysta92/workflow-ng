//import { RegistryRecord } from '@workflow/registry';
import { Component } from '@angular/core'

export class OutletItem {

  name: string;
  path: string;
  type: string;
  position: number;
  component: Component

  constructor(data) {
    this.name = data.name;
    this.path = data.path;
    this.type = data.type;
    this.position = data.position;
    this.component = data.component;
  }
}